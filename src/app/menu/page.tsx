"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/data/menu";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  let categories = Array.from(new Set(menu.map((item) => item.category)));
  categories.unshift("All");

  const filteredMenu =
    activeCategory === "All" || !activeCategory
      ? menu
      : menu.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="about py-[40px] overflow-hidden">
        <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8 my-8">
          <section className="bg-white dark:bg-dark pt-[90px]">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-end -mx-4">
                <div className="w-full px-4 lg:w-2/3">
                  <div className="mb-[60px] max-w-[510px] lg:mb-20">
                    <h2 className="text-charcoal-500 mb-4 text-3xl font-bold md:leading-[45px] md:text-[38px]">
                      Find the best that suite your palette!
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Choose from our menu of delicious options, and let us know
                      if you have any dietary restrictions.
                    </p>
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/3">
                  <div className="mb-[60px] lg:mb-20 lg:text-right">
                    <Link
                      href="/order_online"
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
              </div>

              <div className="flex flex-wrap place-items-center">
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="p-3 mb-10 bg-white border rounded-xl border-stroke dark:border-dark-3 dark:bg-dark-2">
                    <Image
                      src="/assets/table.jpg"
                      alt="Dine in"
                      className="w-full rounded-lg"
                      height={720}
                      width={720}
                    />
                    <div className="px-3 pt-6 pb-3">
                      <span className="mb-1 text-base font-medium text-body-color dark:text-dark-6">
                        #Tables
                      </span>

                      <span className="block text-lg font-semibold sm:text-2xl md:text-xl lg:text-lg xl:text-2xl">
                        Dine in
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="p-3 mb-10 bg-white border rounded-xl border-stroke dark:border-dark-3 dark:bg-dark-2">
                    <Image
                      src="/assets/order.png"
                      alt="Dine in"
                      className="w-full rounded-lg"
                      height={720}
                      width={720}
                    />
                    <div className="px-3 pt-6 pb-3">
                      <span className="mb-1 text-base font-medium text-body-color dark:text-dark-6">
                        #Rides
                      </span>

                      <span className="block text-lg font-semibold sm:text-2xl md:text-xl lg:text-lg xl:text-2xl">
                        Order for Delivery
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="p-3 mb-10 bg-white border rounded-xl border-stroke dark:border-dark-3 dark:bg-dark-2">
                    <Image
                      src="/assets/takeout.jpg"
                      alt="Dine in"
                      className="w-full rounded-lg"
                      height={720}
                      width={720}
                    />
                    <div className="px-3 pt-6 pb-3">
                      <span className="mb-1 text-base font-medium text-body-color dark:text-dark-6">
                        #Kitchen
                      </span>
                      <span className="block text-lg font-semibold sm:text-2xl md:text-xl lg:text-lg xl:text-2xl">
                        Take out
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white dark:bg-dark">
            <div className="container mx-auto">
              {/* Filters */}
              <div className="flex flex-wrap place-items-center gap-1 py-4">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setActiveCategory(
                        category == activeCategory ? null : category
                      )
                    }
                    className={`px-4 border border-olive-500 rounded-full transition duration-150 hover:cursor-pointer hover:bg-lemon-500  hover:text-charcoal-500 ${
                      activeCategory === category
                        ? "bg-lemon-500 text-charcoal-500"
                        : ""
                    }`}
                  >
                    {category}
                  </button>
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
                      <div
                        key={index}
                        className="mb-10 text-charcoal-500 pb-4 rounded-t-xl shadow-md"
                      >
                        <div className="relative mb-5 overflow-hidden rounded-t-xl">
                          <div className="mask mask-square w-full h-40">
                            <Image
                              src={item.image}
                              alt={item.name}
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
                              {item.name}
                            </Link>
                          </h3>
                          <p className="mb-5 text-base font-medium">
                            <span>{item.category}</span>
                          </p>
                          <Link
                            href="#"
                            className="inline-flex items-center justify-center rounded-full border border-olive-500 py-[9px] px-5 text-center text-olive-500 font-medium hover:bg-lemon-500 hover:text-olive-700 hover:border-lemon-500 transition duration-300"
                          >
                            Order Now
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Menu;
