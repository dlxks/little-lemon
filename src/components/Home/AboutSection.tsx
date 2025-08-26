import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="about py-[40px] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8 my-8">
        <div className="flex flex-wrap items-center justify-between ">
          {/* Left side */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  );
};

export default AboutSection;
