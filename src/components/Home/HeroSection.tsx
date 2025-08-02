import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
  );
};

export default HeroSection;
