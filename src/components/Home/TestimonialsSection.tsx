import TestimonialSlider from "@/components/Home/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="testimonials bg-olive-200">
      <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8 my-8">
        <div className=" flex flex-wrap justify-center">
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
  );
};

export default TestimonialSection;
