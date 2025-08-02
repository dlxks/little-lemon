"use client";
import { useCart } from "@/app/context/CartContext";
import { Menu } from "@/types/menuTypes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: Menu;
  onViewDetails: (item: Menu) => void;
};

const OrderGridLayout = ({ item, onViewDetails }: Props) => {
  const { increaseCartItem } = useCart();

  const handleItemToWishList = () => {
    console.log("Add to wishlist:", item.name);
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-white shadow-1 min-h-[270px] mb-4 shadow-md/20">
        <div className="absolute w-full h-full group-hover:bg-gradient-to-t from-black via-black/20 to-transparent transition-all duration-200"></div>

        <div className="mask mask-square w-full md:w-100 h-70">
          <Image
            src={item.image}
            alt={item.name}
            width={1080}
            height={1080}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-4 ease-linear duration-200 group-hover:translate-y-0 z-10">
          <button
            onClick={() => onViewDetails(item)}
            id={item.name}
            aria-label="button for quick view"
            className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-charcoal-500 hover:bg-lemon-500 hover:cursor-pointer"
          >
            <Icon icon="bi:eye" />
          </button>

          <button
            onClick={() => increaseCartItem(item.id)}
            aria-label="button for add to cart"
            className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-olive-500 text-white ease-out duration-200 hover:bg-lemon-500 hover:text-charcoal-500 hover:cursor-pointer"
          >
            Add dish
          </button>

          <button
            onClick={handleItemToWishList}
            aria-label="button for favorite select"
            id="favOne"
            className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-charcoal-500 hover:bg-lemon-500 hover:cursor-pointer"
          >
            <Icon icon="bi:heart" />
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-xl text-charcoal-500 ease-out duration-200 hover:text-olive-500 mb-1.5">
          <Link href="/shop-details">
            {" "}
            {item.name}{" "}
            <span className="text-sm text-olive-500">- {item.category}</span>{" "}
          </Link>
        </h3>

        <span className="flex items-center gap-2 font-medium text-lg">
          <span className="text-charcoal-500">${item.price}</span>
        </span>
      </div>
    </div>
  );
};

export default OrderGridLayout;
