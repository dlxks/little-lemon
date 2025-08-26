import { BookingFormData } from "./BookingForm.types";

export const FIXED_TIMES = [
  "15:00", "15:30", "16:00", "16:30",
  "17:30", "18:00", "18:30", "19:00",
  "19:30", "20:00", "20:30", "21:00",
  "21:30", "22:00", "22:30", "23:00",
];

export const defaultFormData: BookingFormData = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guest: 1,
  occasion: "",
  confirmation: "",
};
