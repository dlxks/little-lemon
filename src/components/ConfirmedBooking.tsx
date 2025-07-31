import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";

type BookingConfirmationModalProps = {
  show: boolean;
  onClose: () => void;
};

const BookingConfirmationModal = ({
  show,
  onClose,
}: BookingConfirmationModalProps) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              className="bg-white rounded-lg shadow-lg max-w-md w-full p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Reservation Confirmed
              </h3>
              <p className="mt-2 text-gray-600">
                Your reservation at Little Lemon has been confirmed!
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-lemon-500 text-charcoal-500 font-semibold px-4 py-2 rounded-full hover:bg-olive-500 hover:text-mist-500 transition-all duration-300 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};
export default BookingConfirmationModal;
