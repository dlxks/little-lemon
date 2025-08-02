"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { menu } from "@/data/menu";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuFilter from "@/components/Menu/MenuFilter";
import MenuCard from "@/components/Menu/MenuCard";
import MenuHeader from "@/components/Menu/MenuHeader";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  let categories = Array.from(new Set(menu.map((item) => item.category)));
  categories.unshift("All");

  const filteredMenu =
    activeCategory === "All" || !activeCategory
      ? menu
      : menu.filter((item) => item.category === activeCategory);

  return (
    <section className="py-[40px] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8">
        <section className="bg-white">
          <div className="flex flex-wrap items-end">
            <div className="w-full px-4 lg:w-2/3">
              <div className="mb-[60px] max-w-[510px] lg:mb-20">
                <h2 className="text-charcoal-500 mb-4 text-3xl font-bold md:leading-[45px] md:text-[38px]">
                  Find the best that suite your palette!
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Choose from our menu of delicious options, and let us know if
                  you have any dietary restrictions.
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/3">
              <div className="mb-[60px] lg:mb-20 lg:text-right">
                <Link
                  href="/order_now"
                  className="inline-flex items-center text-charcoal-900 bg-lemon-500 hover:bg-olive-500 hover:text-mist-500 font-bold shadow shadow-charcoal-500 py-3 px-4 rounded-full transition duration-150 cursor-pointer"
                >
                  Order Now
                  <Icon
                    icon="mdi:cart"
                    className="ml-2 transform transition duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap place-items-center">
              <MenuHeader />
            </div>
          </div>
        </section>

        <section className="bg-white">
          {/* Filters */}
          <div className="flex flex-wrap place-items-center gap-1 pb-8">
            {categories.map((category, index) => (
              <MenuFilter
                category={category}
                key={index}
                activeCategory={activeCategory}
                onClick={setActiveCategory}
              />
            ))}
          </div>

          <div className="filter flex flex-wrap justify-center">
            <AnimatePresence mode="wait">
              {filteredMenu.map((item, index) => (
                <motion.div
                  key={item.name} // use something unique
                  className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuCard
                    key={index}
                    name={item.name}
                    image={item.image}
                    category={item.category}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Menu;
