import React, { useState } from "react";
import { Menu } from "@/types/menuTypes";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useCart } from "@/app/context/CartContext";

type Props = {
  item: Menu | null;
  onClose: () => void;
};

const MenuModal = ({ item, onClose }: Props) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  const { increaseCartItem } = useCart();
  const handleAddToCart = () => {
    if (quantity < 1 || !item) return; // ✅ prevent accidental submit
    for (let i = 0; i < quantity; i++) {
      increaseCartItem(item.id);
    }
    onClose();
  };

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-100 bg-charcoal-500/50 flex items-center justify-center">
      <div className="container mx-5 md:mx-auto bg-white p-6 rounded-xl max-w-5xl w-full shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-charcoal-500 rounded-full border-3 border-white bg-mist-400 p-2 hover:cursor-pointer"
        >
          <Icon icon="bi:x-lg" className="text-txl" />
        </button>

        <div className="flex flex-wrap items-center gap-8">
          {/* Image */}
          <div className="w-full lg:w-6/12">
            <div className="mask mask-square w-full h-70">
              <Image
                src={item.image}
                alt={item.name}
                height={1080}
                width={1080}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <h2 className="text-xl font-bold text-charcoal-500">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>

            {/* Price and Quantity */}
            <div className="flex flex-wrap justify-between gap-2 mt-6 mb-7.5">
              {/* Price */}
              <div>
                <h4 className="font-semibold text-lg text-charcoal-700 mb-3.5">
                  Price
                </h4>
                <span className="text-xl xl:text-heading-4 font-semibold text-charcoal-700">
                  ${item.price}
                </span>
              </div>

              {/* Quantity */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg">Quantity</h4>
                  {quantity > 0 ? (
                    <button
                      onClick={() => setQuantity(0)}
                      className="text-red-500 hover:cursor-pointer px-1 py-2"
                    >
                      <Icon icon="bi:trash3-fill" />
                    </button>
                  ) : null}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity()}
                    aria-label="Decrease quantity"
                    className="w-10 h-10 rounded-[5px] bg-mist-400 text-charcoal-500 hover:text-green-500 hover:cursor-pointer flex items-center justify-center disabled:hover:text-charcoal-400"
                    disabled={quantity === 0}
                  >
                    <Icon icon="bi:dash" className="text-2xl" />
                  </button>
                  <span className="w-20 h-10 flex items-center justify-center border border-charcoal-400 rounded-[5px] bg-white font-medium text-charcoal-500">
                    {quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity()}
                    aria-label="Increase quantity"
                    className="w-10 h-10 rounded-[5px] bg-mist-400 text-charcoal-500 hover:text-green-500 hover:cursor-pointer flex items-center justify-center"
                  >
                    <Icon icon="bi:plus" className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add Button */}
            <div className="flex justify-end mt-8">
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-lemon-500 text-charcoal-500 rounded-full font-bold shadow-sm/20 shadow-charcoal-500 hover:bg-olive-500 hover:text-mist-500 hover:cursor-pointer duration-200 ease-in-out"
              >
                Add dish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
