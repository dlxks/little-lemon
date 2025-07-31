"use client";

import BookingForm from "@/components/BookingForm";
import Toast from "@/components/Toast";
import { timesReducer } from "@/lib/timesReducer";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";

const allTimes = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

function initializeTimes(): string[] {
  return allTimes;
}

const BookingPage = () => {
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [availableTimes, dispatchTimes] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  return (
    <>
      <section
        className="overflow-hidden py-12 lg:py-[-90px]"
        role="region"
        aria-labelledby="booking-title"
      >
        <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/reservations"
              aria-label="Return to reservation overview"
              className="inline-flex items-center text-charcoal-900 bg-lemon-500 hover:bg-mist-500 hover:text-charcoal-500 font-bold shadow shadow-charcoal-500 py-3 px-4 rounded-full transition duration-300 cursor-pointer"
            >
              Go back
              <Icon icon="bi:arrow-left-circle-fill" className="text-lg ml-2" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="w-full px-4 lg:w-6/12 mb-8 md:mb-0">
              <h3
                id="booking-title"
                className="text-3xl font-bold text-charcoal-500 place-self-center mb-8"
              >
                Make Your Reservation
              </h3>

              <BookingForm
                availableTimes={availableTimes}
                dispatchTimes={dispatchTimes}
                setToast={setToast}
              />
            </div>

            <div
              className="hidden md:block w-full px-4 lg:w-1/2 place-items-center"
              role="presentation"
              aria-hidden="true"
            >
              <div className="mask mask-square w-[430px]">
                <Image
                  src="/assets/restauranfood.jpg"
                  alt="A freshly prepared dish from Little Lemon restaurant"
                  height={720}
                  width={720}
                  className="rounded-xl shadow-md shadow-charcoal-500 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default BookingPage;
