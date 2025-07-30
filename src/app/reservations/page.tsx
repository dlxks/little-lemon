import Image from "next/image";

const Reservations = () => {
  return (
    <>
      <section className="overflow-hidden py-12 lg:py-[-90px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mx-auto flex h-[500px] max-w-[440px]">
                <div className="absolute left-0 z-30 mr-14 max-width-[270px] rounded-lg">
                  <Image
                    alt="about image"
                    src="/assets/men2.jpg"
                    width={240}
                    height={240}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="absolute right-0 top-20 z-30 ml-14 max-w-[300px] rounded-lg">
                  <Image
                    alt="about image"
                    src="/assets/men2.jpg"
                    width={240}
                    height={240}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
              <div className="md:mt-10 lg:mt-0">
                <h1 className="text-2xl md:text-3xl">
                  Make your Reservations Now!
                </h1>

                <form></form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservations;
