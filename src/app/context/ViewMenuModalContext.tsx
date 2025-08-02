"use client";
import { Product } from "@/types/menuTypes";
import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  openModal: (product: Product) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const close = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal: close }}
    >
      {children}
    </ModalContext.Provider>
  );
};
