import {
  BookingFormData,
  BookingFormErrors,
  BookingFormProps,
} from "@/components/BookingForm/BookingForm.types";

import {
  FIXED_TIMES,
  defaultFormData,
} from "@/components/BookingForm/constants";

import {
  validateForm,
  hasTimeConflict,
} from "@/components/BookingForm/formUtils";

import BookingConfirmationModal from "@/components/BookingConfirmationModal";

import { useEffect, useState, ChangeEvent, FormEvent, ReactNode } from "react";
import useDebounce from "@/hooks/useDebounce";
import { submitAPI } from "@/lib/api";

const BookingForm = ({
  setToast,
  availableTimes,
  dispatchTimes,
}: BookingFormProps) => {
  const [formData, setFormData] = useState<BookingFormData>(defaultFormData);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [bookingData, setBookingData] = useState<BookingFormData[]>([]);

  useEffect(() => {
    const reservationsList = localStorage.getItem("bookingData");
    if (reservationsList) {
      setBookingData(JSON.parse(reservationsList));
    }
  }, []);

  const debouncedFormData = useDebounce(formData, 1000);
  useEffect(() => {
    if (debouncedFormData.date) {
      dispatchTimes({ type: "update", date: debouncedFormData.date });
    }
  }, [debouncedFormData.date, dispatchTimes]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isValid = validateForm(formData);
    setErrors(isValid);

    if (Object.keys(isValid).length > 0) {
      setToast({ type: "error", message: "Please fix errors above" });
      return;
    }

    const conflict = hasTimeConflict(bookingData, formData);
    if (conflict) {
      setToast({
        type: "error",
        message:
          "Selected date and time already has a reservation. Please choose a different time",
      });
      return;
    }

    const success = await submitAPI(formData);
    if (success) {
      const updatedData = [...bookingData, formData];
      setBookingData(updatedData);
      localStorage.setItem("bookingData", JSON.stringify(updatedData));
      setFormData(defaultFormData);
      setErrors({});
      setIsConfirmationOpen(true);
    } else {
      setToast({
        type: "error",
        message: "Submission failed. Please try again.",
      });
    }
  };

  const renderError = (field: keyof BookingFormData): ReactNode =>
    errors[field] ? (
      <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
    ) : null;

  const isTimeDisabled = (time: string): boolean =>
    bookingData.some(
      (booking) => booking.date === formData.date && booking.time === time
    );

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        aria-labelledby="booking-form-heading"
        noValidate
      >
        <h2 id="booking-form-heading" className="sr-only">
          Make Your Reservation
        </h2>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="fName"
                className="mb-3 block text-base font-medium text-olive-500"
              >
                First Name
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                value={formData.fName}
                placeholder="First Name"
                required
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.fName}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-charcoal-500 outline-none focus:border-lemon-500 focus:shadow-md"
              />
              {renderError("fName")}
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="lName"
                className="mb-3 block text-base font-medium text-olive-500"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                value={formData.lName}
                placeholder="Last Name"
                required
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.lName}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-charcoal-500 outline-none focus:border-lemon-500 focus:shadow-md"
              />
              {renderError("lName")}
            </div>
          </div>
        </div>

        <div className="relative mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-olive-500"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="example@example.com"
            required
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-charcoal-500 outline-none focus:border-lemon-500 focus:shadow-md"
          />
          {renderError("email")}
        </div>

        <div className="mb-5">
          <label
            htmlFor="phone"
            className="mb-3 block text-base font-medium text-olive-500"
          >
            Contact Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.phone}
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-charcoal-500 outline-none focus:border-lemon-500 focus:shadow-md"
          />
          {renderError("phone")}
        </div>

        <div className="mb-5">
          <label
            htmlFor="guest"
            className="mb-3 block text-base font-medium text-olive-500"
          >
            What is the occasion?
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.occasion}
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-charcoal-500 outline-none focus:border-lemon-500 focus:shadow-md"
          >
            <option value="" disabled>
              Choose an event
            </option>
            <option value="Casual">Casual</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
          {renderError("occasion")}
        </div>

        <div className="mb-5">
          <label
            htmlFor="guest"
            className="mb-3 block text-base font-medium text-olive-500"
          >
            How many guest are you bringing?{" "}
            <span className="text-charcoal-400 italic">
              (Including yourself)
            </span>
          </label>
          <input
            type="number"
            name="guest"
            id="guest"
            value={formData.guest}
            placeholder="5"
            min="1"
            required
            onChange={handleChange}
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-charcoal-500 outline-none focus:border-lemon-500 focus:shadow-md"
          />
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-olive-500"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                required
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.date}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-charcoal-500 outline-none focus:border-lemon-500 focus:shadow-md"
              />
              {renderError("date")}
            </div>
          </div>

          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="time"
                className="mb-3 block text-base font-medium text-olive-500"
              >
                Time
              </label>
              <select
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.time}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-charcoal-500 outline-none focus:border-lemon-500 focus:shadow-md"
              >
                <option value="" disabled>
                  Choose available time
                </option>
                {FIXED_TIMES.map((time) => (
                  <option
                    key={time}
                    value={time}
                    disabled={isTimeDisabled(time)}
                  >
                    {formatTime(time)}{" "}
                    {isTimeDisabled(time) ? "(Unavailable)" : ""}
                  </option>
                ))}
              </select>
              {renderError("time")}
            </div>
          </div>
        </div>

        <fieldset
          aria-required="true"
          aria-describedby={
            errors.confirmation ? "confirmation-error" : undefined
          }
          className="mb-5"
        >
          <legend className="mb-3 block text-base font-medium text-olive-500">
            Are you coming to the event?
          </legend>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input
                type="radio"
                name="confirmation"
                id="confirmation1"
                className="h-5 w-5"
                value="yes"
                aria-checked={formData.confirmation === "yes"}
                checked={formData.confirmation === "yes"}
                onChange={handleChange}
              />
              <label
                htmlFor="confirmation1"
                className="pl-3 text-base font-medium text-olive-500"
              >
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="confirmation"
                id="confirmation2"
                className="h-5 w-5"
                value="no"
                aria-checked={formData.confirmation === "no"}
                checked={formData.confirmation === "no"}
                onChange={handleChange}
              />
              <label
                htmlFor="confirmation2"
                className="pl-3 text-base font-medium text-olive-500"
              >
                No
              </label>
            </div>
          </div>
        </fieldset>

        <div>
          <button className="hover:shadow-form rounded-full shadow-sm shadow-charcoal-500 bg-lemon-500 py-3 px-8 text-center text-base font-semibold text-charcoal-500 outline-none cursor-pointer hover:bg-olive-500 hover:text-mist-500 transition duration-300">
            Submit
          </button>
        </div>
      </form>
      <BookingConfirmationModal
        show={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
      />
    </>
  );
};

export default BookingForm;
