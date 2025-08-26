import { BookingFormData, BookingFormErrors } from "./BookingForm.types";

export const validateForm = (formData: BookingFormData): BookingFormErrors => {
  const errors: BookingFormErrors = {};

  if (!formData.fName.trim()) errors.fName = "First name is required";
  if (!formData.lName.trim()) errors.lName = "Last name is required";

  if (!formData.email.trim()) {
    errors.email = "Email address is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Contact number is required";
  } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
    errors.phone = "Phone must be in format 123-456-7890.";
  }

  if (!formData.date) errors.date = "Please choose a date";
  if (!formData.time) errors.time = "Please choose the time you prefer";
  if (!formData.occasion) errors.occasion = "Please choose the occasion";
  if (!formData.confirmation) errors.confirmation = "Please select an option";

  return errors;
};

export const hasTimeConflict = (
  bookingData: BookingFormData[],
  formData: BookingFormData
) =>
  bookingData.some(
    (booking) =>
      booking.date === formData.date && booking.time === formData.time
  );
