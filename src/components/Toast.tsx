import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

type ToastProps = {
  type: "success" | "error";
  message: string;
  onClose: () => void;
};

const Toast = ({ type, message, onClose }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 6000); //auto-close in 6 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null; //if not visible, return null

  const bgColor = type === "success" ? "bg-green-500 bg-opan" : "bg-red-500";

  return (
    <div className={`fixed top-6 z-50 place-self-center`}>
      <div
        className={`flex items-center w-full max-w-sm p-4 rounded-full shadow-md shadow-charcoal-500 text-white ${bgColor}`}
        role="alert"
      >
        <div className="text-sm font-medium">{message}</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 hover:bg-white/20"
          onClick={() => {
            setVisible(false);
            onClose();
          }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l12 12M13 1L1 13"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
