"use client";

import { useRef } from "react";
import { Icon } from "@iconify/react";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { Button } from "@headlessui/react";

export default function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector(".testimonial-item") as HTMLElement;
    const cardWidth = card?.offsetWidth + 32 || 352; // 32 = mx-4

    const start = container.scrollLeft;
    const distance = direction === "left" ? -cardWidth : cardWidth;
    const duration = 300;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      container.scrollLeft = start + distance * easeInOutCubic(progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16 py-8 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex-no-wrap snap-x snap-mandatory mx-auto flex h-auto py-8 w-full overflow-x-auto scroll-smooth xs:max-w-[480px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] scrollbar-hide will-change-scroll"
        >
          {[...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-item shrink-0 snap-start w-80 mx-4 rounded-lg shadow bg-mist-200 text-charcoal-500"
            >
              <div className="px-5 py-5">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 items-center mask mask-circle">
                    <Image
                      className="w-full h-full object-cover mb-3 rounded-full shadow-lg"
                      src={testimonial.img}
                      alt={testimonial.name}
                      height={1080}
                      width={720}
                      priority
                    />
                  </div>
                </div>
                <h5 className="text-xl font-semibold tracking-tight text-center">
                  {testimonial.name}
                </h5>
                <div className="flex items-center mt-2.5 mb-5 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      icon="bi:star-fill"
                      className="text-lemon-500"
                    />
                  ))}
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                    {testimonial.rating}.0
                  </span>
                </div>
                <p className="text-md italic text-center">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3">
        <Button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="flex h-12 w-12 items-center justify-center bg-white text-dark shadow-lg transition-all hover:bg-mist-500 hover:cursor-pointer"
        >
          <Icon icon="fa7-solid:arrow-left" />
        </Button>
        <Button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="flex h-12 w-12 items-center justify-center bg-white text-dark shadow-lg transition-all hover:bg-mist-500 hover:cursor-pointer"
        >
          <Icon icon="fa7-solid:arrow-right" />
        </Button>
      </div>
    </div>
  );
}
