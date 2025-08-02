import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const HighlightsCard = ({ dish }: { dish: any }) => {
  return (
    <div className="special-item relative group overflow-hidden  max-w-sm bg-mist-500 border border-gray-200 rounded-t-xl shadow-sm hover:scale-105 transition-all duration-300">
      <Link href="/menu">
        <Image
          className="rounded-t-lg"
          src={dish.image}
          width={1920}
          height={1024}
          alt="Greek Saad"
          priority
        />
      </Link>
      <div className="p-5">
        <div className="flex justify-between merriweather">
          <Link href="/menu">
            <h5 className="mb-2 text-2xl font-bold text-olive-500">
              {dish.name}
            </h5>
          </Link>
          <p className="text-xl md:text-2xl font-bold text-peach-500">
            ${dish.price}
          </p>
        </div>
        <p className="mb-3 font-normal text-charcoal-400 px-4 group-hover:text-charcoal-500 transition-all duration-300">
          {dish.description}
        </p>
        <Link
          href="/menu"
          className="group relative inline-flex items-center font-medium  py-1 px-4 rounded-full bg-olive-500 text-white overflow-hidden wipe-hover transition-all duration-300"
        >
          <span className="relative z-10 flex items-center">
            Order for delivery
          </span>
          <Icon
            icon="ic:round-delivery-dining"
            className="text-2xl ml-2 z-10 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
      <div className="hover_color_bubble"></div>
    </div>
  );
};

export default HighlightsCard;
