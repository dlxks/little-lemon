export type BookingFormData = {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guest: number;
  occasion: string;
  confirmation: string;
};

export type BookingFormErrors = {
  [K in keyof BookingFormData]?: string;
};

export type ToastType = {
  type: "success" | "error";
  message: string;
};

export type BookingFormProps = {
  setToast: (toast: ToastType | null) => void;
  availableTimes: string[];
  dispatchTimes: React.Dispatch<{ type: "update"; date: string }>;
};
