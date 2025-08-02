"use client";

import { useCart } from "@/app/context/CartContext";
import { menu } from "@/data/menu";
import { Icon } from "@iconify/react";
import Link from "next/link";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const {
    cartItems,
    increaseCartItem,
    decreaseCartItem,
    removeCartItem,
    clearCartItems,
  } = useCart();

  const fullCartItems = cartItems
    .map((item) => {
      const product = menu.find((p) => p.id === item.id);
      if (!product || product.id === undefined || product.price === undefined)
        return null;
      return {
        ...product,
        quantity: item.quantity,
        price: Number(product.price), // Ensure price is a number
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const totalPrice = fullCartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 shadow-sm/20">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={onClose}>
            <Icon icon="bi:x-lg" className="text-xl text-gray-600" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto">
          {fullCartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-2 border-b border-charcoal-100 pb-2"
            >
              <div className="flex gap-3">
                <img
                  src={item.image ?? "/placeholder.jpg"}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => decreaseCartItem(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => increaseCartItem(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeCartItem(item.id)}
                className="text-red-500 hover:text-red-700 text-xl ease-in-out duration-200"
              >
                <Icon icon="bi:trash" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-right font-semibold px-4 pb-4">
          Total: ${totalPrice.toFixed(2)}
        </p>

        {cartItems.length > 0 && (
          <div className="p-4 border-t border-charcoal-200 space-y-2">
            <button
              onClick={clearCartItems}
              className="w-full py-2 text-sm bg-red-500 text-mist-100 rounded-full hover:bg-red-700 ease-in-out duration-200 hover:cursor-pointer"
            >
              Clear Cart
            </button>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full font-medium py-2 text-center text-sm bg-olive-500 text-white rounded-full hover:bg-lemon-500 hover:text-charcoal-500 ease-in-out duration-200"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
