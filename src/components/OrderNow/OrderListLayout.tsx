"use client";

import { useCart } from "@/app/context/CartContext";
import { Menu } from "@/types/menuTypes";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: Menu;
  onViewDetails: (item: Menu) => void;
};

const OrderListLayout = ({ item, onViewDetails }: Props) => {
  const { increaseCartItem } = useCart();
  const handleAddToCart = () => {
    increaseCartItem(item.id);
  };

  const handleItemToWishList = () => {
    console.log("Add to wishlist:", item.name);
  };

  return (
    <div className="group rounded-xl bg-white shadow-md/20">
      <div className="flex">
        <div className="shadow-list relative overflow-hidden flex items-center justify-center max-w-[270px] w-full rounded-l-xl">
          <div className="mask mask-square w-full md:w-100 h-50 rounded-l-xl">
            <div className="absolute w-full h-full group-hover:bg-gradient-to-t from-black via-black/20 to-transparent ease-in-out duration-200"></div>
            <Image
              src={item.image}
              alt={item.name}
              width={1080}
              height={1080}
              className="object-cover w-full h-full rounded-l-xl "
            />
          </div>

          <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
            <button
              onClick={() => onViewDetails(item)}
              id={item.name}
              aria-label="button for quick view"
              className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-charcoal-500 hover:bg-lemon-500 hover:cursor-pointer"
            >
              <Icon icon="bi:eye" />
            </button>

            <button
              onClick={handleAddToCart}
              aria-label="button for add to cart"
              className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-olive-500 text-white ease-out duration-200 hover:bg-lemon-500 hover:text-charcoal-500 hover:cursor-pointer"
            >
              Add to cart
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

        <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center justify-center sm:justify-between py-5 px-4 sm:px-7.5 lg:pl-11 lg:pr-12">
          <div>
            <h3 className="font-bold text-xl text-charcoal-500 ease-out duration-200 hover:text-olive-500 mb-1.5">
              <Link href="/shop-details">
                {" "}
                {item.name}{" "}
                <span className="text-sm text-olive-500">
                  - {item.category}
                </span>
              </Link>
            </h3>
            <span className="flex items-center gap-2 font-medium text-xl">
              <span className="text-charcoal-500">${item.price}</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 mb-2 text-lemon-500">
            <Icon icon="bi:star-fill" />
            <Icon icon="bi:star-fill" />
            <Icon icon="bi:star-fill" />
            <Icon icon="bi:star-fill" />
            <Icon icon="bi:star-fill" />
            <span className="text-charcoal-500">(15)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListLayout;
