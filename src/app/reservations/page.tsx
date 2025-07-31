"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import formatTime from "@/utils/formatTime";

type Reservation = {
  fName: string;
  date: string;
  time: string;
  guest: number;
};

const Reservations = () => {
  const [bookingData, setBookingData] = useState<Reservation[]>([]);

  useEffect(() => {
    const latestReservations = localStorage.getItem("bookingData");
    if (latestReservations) {
      try {
        const parsed: Reservation[] = JSON.parse(latestReservations);
        setBookingData(parsed);
      } catch (err) {
        console.error("Error parsing booking data", err);
      }
    }
  }, []);

  return (
    <section className="overflow-hidden py-12 lg:py-[-90px]">
      <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8 my-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-olive-500">
            See Our Reservations
          </h1>
          <Link
            href="/booking"
            className="inline-flex items-center text-charcoal-900 bg-lemon-500 hover:bg-olive-500 hover:text-mist-500 font-bold shadow shadow-charcoal-500 py-3 px-4 rounded-full transition duration-150 cursor-pointer"
          >
            Make Reservation
            <Icon icon="mdi:utensils-variant" className="text-lg ml-2" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-6/12 mb-8 md:mb-0">
            <div className="relative mask mask-square h-120 w-full">
              <Image
                alt="table image"
                src="/assets/table.jpg"
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-xl shadow-md shadow-charcoal-500"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="md:mt-10 lg:mt-0">
              <div className="place-items-center my-4">
                <div className="w-full max-w-md p-4 bg-olive-500 rounded-lg shadow-sm sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-mist-500">
                      Latest Reservations
                    </h5>
                  </div>
                  <div className="flow-root">
                    <ul role="list" className="divide-y divide-mist-200">
                      {bookingData
                        .sort(
                          (a, b) =>
                            new Date(b.date).getTime() -
                            new Date(a.date).getTime()
                        )
                        .slice(0, 5)
                        .map((reservation, index) => {
                          const reservationDate = new Date(
                            reservation.date
                          ).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          });

                          return (
                            <li
                              key={index}
                              className="py-3 sm:py-4 text-mist-300"
                            >
                              <div className="flex items-center">
                                <div className="shrink-0">
                                  <Icon
                                    icon="bi:calendar-check"
                                    className="w-7 h-7"
                                  />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                  <p className="text-sm font-medium">
                                    {reservation.fName}
                                  </p>
                                  <p className="text-sm text-mist-700">
                                    No. of people:{" "}
                                    <span className="font-bold">
                                      {reservation.guest}
                                    </span>
                                  </p>
                                </div>

                                <div className="flex-1 justify-items-end">
                                  <p className="text-md font-medium text-lemon-500 italic">
                                    {reservationDate}
                                  </p>
                                  <p className="text-sm text-mist-700 justify-end">
                                    {formatTime(reservation.time)}
                                  </p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      {bookingData.length === 0 && (
                        <p className="text-sm text-mist-200 italic">
                          No reservations yet.
                        </p>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
