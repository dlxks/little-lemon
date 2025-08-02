import { dishes } from "@/data/dishes";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import HighlightsCard from "@/components/Home/HighlightsCard";

const HighlightsSection = () => {
  return (
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
          {...dishes.map((dish, index) => (
            <HighlightsCard dish={dish} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
