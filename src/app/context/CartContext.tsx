"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext, useState, type ReactNode } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type CartContext = {
  openCart: () => void;
  closeCart: () => void;
  getCartItemQuantity: (id: number) => number;
  increaseCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
  clearCartItems: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  isOpen: boolean; // ✅ Add this
};

const CartContext = createContext({} as CartContext);

export const useCart = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getCartItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartItem(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]; // Add new item
      } else {
        return currItems.map((item) => {
          // Increment quantity of existing item
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }; // Increment quantity
          } else {
            return item; // Keep other items unchanged
          }
        });
      }
    });
  }

  function decreaseCartItem(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id); // Remove item if quantity is 1
      } else {
        return currItems.map((item) => {
          // Decrement quantity if item exists
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }; // Decrement quantity
          } else {
            return item; // Keep other items unchanged
          }
        });
      }
    });
  }

  function removeCartItem(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function clearCartItems() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        openCart,
        closeCart,
        getCartItemQuantity,
        increaseCartItem,
        decreaseCartItem,
        removeCartItem,
        clearCartItems,
        cartQuantity,
        cartItems,
        isOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
