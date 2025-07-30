import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about py-[40px] overflow-hidden">
        <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="mb-24">
            <div className="-flex flex-wrap items-center justify-center">
              <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                <div className="max-w-[465px] lg:mb-0">
                  <span className="mb-4 block text-lg font-semibold text-olive-500 md:text-2xl">
                    Meet
                  </span>
                  <h2 className="mb-5 text-2xl font-bold !leading-tight text-charcoal-500 xl:text-4xl">
                    Adrian
                  </h2>
                  <p className="mb-9 text-base text-body-color dark:text-dark-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris dictum, magna in feugiat volutpat, lacus lectus
                    maximus nisi, eu vestibulum dolor erat id sapien. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Donec sed diam tellus. Nam malesuada
                    mauris eget venenatis aliquam. Vestibulum interdum, ex ut
                    viverra viverra, elit est commodo lorem, at malesuada magna
                    purus ac enim.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                <div>
                  <Image
                    src="/assets/men2.jpg"
                    alt="Adrian"
                    className="rounded-2xl shadow-sm/20"
                    height={1080}
                    width={720}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="flex flex-wrap-reverse items-center justify-center">
              <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                <div>
                  <Image
                    src="/assets/men1.jpg"
                    alt="Adrian"
                    className="rounded-2xl shadow-sm/20"
                    height={1080}
                    width={720}
                    priority
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                <div className="mb-12 max-w-[465px] lg:mb-0">
                  <span className="mb-4 block text-lg font-semibold text-olive-500 md:text-2xl">
                    Meet
                  </span>
                  <h2 className="mb-5 text-2xl font-bold !leading-tight text-charcoal-500 xl:text-4xl">
                    Mario
                  </h2>
                  <p className="mb-9 text-base text-body-color dark:text-dark-6">
                    Donec volutpat sollicitudin fringilla. Suspendisse lacus ex,
                    rhoncus eu elit rhoncus, pulvinar pretium dui. Nam non nibh
                    quis ante convallis convallis euismod nec magna. Nam non
                    ante nunc. Cras sagittis blandit mi, non fermentum magna
                    aliquam sit amet. Phasellus imperdiet sem in sagittis
                    pharetra. Nullam finibus, mauris in faucibus cursus, sapien
                    mi congue neque, nec condimentum leo dui sit amet urna. Ut
                    maximus, magna at porta ullamcorper, tortor eros lobortis
                    purus, eu dictum nisl nibh eget ex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
