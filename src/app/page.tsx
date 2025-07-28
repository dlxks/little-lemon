import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center bg-olive-500">
        <div className="hero-container relative container mx-auto max-w-7xl px-2 py-9 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
          <article className="text-white max-w-xl z-10 lg:pl-8">
            <h1 className="hero-title text-5xl font-bold text-lemon-500 font-markazi leading-snug">
              Little Lemon
            </h1>
            <h3 className="hero-sub text-3xl font-semibold text-white font-markazi mb-4">
              Chicago
            </h3>
            <p className="hero-desc leading-relaxed font-karla text-white mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="bg-lemon-500 hover:bg-lemon-600 text-charcoal-900 font-bold py-2 px-4 rounded transition duration-300 cursor-pointer">
              Reserve a table
            </button>
          </article>
          <div className="place-content-center">
            <div className="absolute bottom-[-90px] lg:right-[275px] z-0 w-70">
              <div className="relative mask mask-square h-120 lg:h-120 w-70 lg:w-120 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 lg:hidden rounded-xl z10"></div>
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
      </section>

      <section className="highlights h-[500px] container mx-auto">
        <div className="hero-container container mx-auto max-w-7xl px-2 py-[45px] sm:px-6 lg:px-8"></div>
      </section>
    </>
  );
}
