import Image from "next/image";
import Link from "next/link";

type MenuCardTypes = {
  image: string;
  name: string;
  category: string;
};

const MenuCard = ({ image, name, category }: MenuCardTypes) => {
  return (
    <div className="mb-10 text-charcoal-500 pb-4 rounded-t-xl shadow-md">
      <div className="relative mb-5 overflow-hidden rounded-t-xl">
        <div className="mask mask-square w-full h-40">
          <Image
            src={image}
            alt={name}
            className="w-full object-cover"
            height={1024}
            width={1024}
          />
        </div>
      </div>
      <div className="text-center">
        <h3>
          <Link
            href="#"
            className="mb-[5px] block text-lg text-olive-500 font-semibold md:text-xl"
          >
            {name}
          </Link>
        </h3>
        <p className="mb-5 text-base font-medium">
          <span>{category}</span>
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-full border border-olive-500 py-[9px] px-5 text-center text-olive-500 font-medium hover:bg-lemon-500 hover:text-olive-700 hover:border-lemon-500 transition duration-300"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;
