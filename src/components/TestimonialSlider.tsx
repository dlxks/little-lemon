"use client";

import { testimonials } from "@/data/testimonials";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { div } from "framer-motion/client";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, i) => (
            <Icon
              key={`full-${i}`}
              icon="tabler:star-filled"
              className="text-lemon-500 text-xl inline-block"
            />
          ))}

        {halfStars > 0 && (
          <Icon
            key="half"
            icon="tabler:star-half-filled"
            className="text-lemon-500 text-xl inline-block"
          />
        )}

        {Array(emptyStars)
          .fill(null)
          .map((_, i) => (
            <Icon
              key={`empty-${i}`}
              icon="tabler:star-filled"
              className="text-charcoal-400 text-xl inline-block"
            />
          ))}
      </>
    );
  };
  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <div
            className={`bg-white rounded-2xl m-4 p-5 my-20 relative ${
              index % 2 ? "shadow-lg/30" : "shadow-2xl/20"
            }`}
          >
            <div className="absolute top-[-45px]">
              <div className="w-18 h-18 items-center mask mask-circle border-2 rounded-full border-white shadow-md">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover mb-3 rounded-full shadow-lg"
                />
              </div>
            </div>
            <h4 className="text-base font-normal text-darkgray my-4">
              {testimonial.testimonial}
            </h4>
            <div className="flex justify-between testimonial-center">
              <div>
                <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">
                  {testimonial.name}
                </h3>
              </div>
              <div className="flex">{renderStars(testimonial.rating)}</div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
