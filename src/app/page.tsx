import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { dishes } from "@/data/dishes";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden py-12 lg:py-[-90px] bg-olive-500 ">
        <div className="hero-container container mx-auto max-w-7xl px-2 py-9 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 mb-16 md:mb-0">
              <div className="md:mt-10 lg:mt-0">
                <h1 className="relative hero-title text-5xl font-bold text-lemon-500 font-markazi leading-snug">
                  Little Lemon
                </h1>
                <h3 className="relative hero-sub text-3xl font-semibold text-white font-markazi mb-4">
                  Chicago
                </h3>
                <p className="relative hero-desc leading-relaxed font-karla text-white mb-6 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <Link
                  href="/reservations"
                  aria-label="Reserve a table at Little Lemon"
                  className="inline-flex items-center text-charcoal-900 bg-lemon-500 hover:bg-mist-500 hover:text-charcoal-500 font-bold shadow shadow-charcoal-500 py-3 px-4 rounded-full transition duration-150 cursor-pointer"
                >
                  Reserve a table
                  <Icon icon="fa7-solid:utensils" className="text-lg ml-2" />
                </Link>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mx-auto flex h-[500px] max-w-[440px]">
                <div className="absolute left-0 z-30 mr-14 max-width-[270px] rounded-lg">
                  <div className="relative mask mask-square h-100 w-70">
                    <Image
                      src="/assets/restaurant.jpg"
                      alt="Appetizer platter"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-xl shadow-[2px_2px_5px_rgba(0,0,0,0.7)] lg:shadow-[2px_2px_10px_rgba(0,0,0,0.7)]"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute right-0 top-20 z-30 ml-14 max-w-[300px] rounded-lg">
                  <div className="relative mask mask-square h-100 w-70">
                    <Image
                      src="/assets/restauranfood.jpg"
                      alt="Appetizer platter"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-xl shadow-[2px_2px_5px_rgba(0,0,0,0.7)] lg:shadow-[2px_2px_10px_rgba(0,0,0,0.7)]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights mt-[70px]">
        <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8 my-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-olive-500">
              This Week's Specials!
            </h1>
            <div>
              <Link
                href="/menu"
                className="inline-flex items-center text-charcoal-900 bg-lemon-500 hover:bg-olive-500 hover:text-mist-500 font-bold shadow shadow-charcoal-500 py-3 px-4 rounded-full transition duration-150 cursor-pointer"
              >
                Explore More
                <Icon icon="mingcute:search-fill" className="text-lg ml-2" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap py-8 gap-8 justify-around">
            {[...dishes].map((dish, index) => (
              <div
                key={index}
                className="special-item relative group overflow-hidden  max-w-sm bg-mist-500 border border-gray-200 rounded-t-xl shadow-sm hover:scale-105 transition-all duration-300"
              >
                <Link href="#">
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
                    <Link href="#">
                      <h5 className="mb-2 text-2xl font-bold text-olive-500">
                        {dish.name}
                      </h5>
                    </Link>
                    <p className="text-xl md:text-2xl font-bold text-peach-500">
                      {dish.price}
                    </p>
                  </div>
                  <p className="mb-3 font-normal text-charcoal-400 px-4 group-hover:text-charcoal-500 transition-all duration-300">
                    {dish.description}
                  </p>
                  <Link
                    href="#"
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
                {/* Bubble background on hover */}
                <div className="hover_color_bubble"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials bg-olive-200">
        <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8 my-8">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Testimonials
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-charcoal-500 sm:text-4xl md:text-[40px]">
                  What our Customer Says
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
            </div>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      <section className="about py-[40px] overflow-hidden">
        <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8 my-8">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            {/* Left side */}
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                {/* Left image */}
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/assets/Mario and Adrian A.jpg"
                      alt="Mario and Adrian A"
                      className="rounded-2xl shadow-sm/20"
                      height={1080}
                      width={720}
                      priority
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/assets/Mario and Adrian b.jpg"
                      alt="Mario and Adrian B"
                      className="rounded-2xl shadow-sm/20"
                      height={1080}
                      width={720}
                      priority
                    />
                  </div>
                </div>
                {/* Right image */}
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/assets/restaurant chef B.jpg"
                      alt="Adrian"
                      className="rounded-2xl shadow-sm/20"
                      height={1080}
                      width={720}
                      priority
                    />
                    <span className="absolute -right-8 -bottom-8 z-[-1]">
                      <Icon
                        icon="arcticons:dots-and-co"
                        className="text-charcoal-400 text-[7rem]"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Know more about us!
                </span>
                <h2 className="mb-5 text-3xl font-bold text-olive-500 sm:text-[40px]/[48px]">
                  Little Lemon
                </h2>

                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center py-3 text-base font-bold text-center text-charcoal-500 border border-transparent rounded-full shadow-sm shadow-charcoal-500 px-7 bg-lemon-500 hover:bg-olive-500 hover:text-mist-500 transition duration-150"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
