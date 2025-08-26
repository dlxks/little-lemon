import Image from "next/image";

const MenuHeader = () => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="p-3 mb-10 bg-white border rounded-xl border-stroke dark:border-dark-3 dark:bg-dark-2">
          <Image
            src="/assets/table.jpg"
            alt="Dine in"
            className="w-full rounded-lg"
            height={720}
            width={720}
          />
          <div className="px-3 pt-6 pb-3">
            <span className="mb-1 text-base font-medium text-body-color dark:text-dark-6">
              #Tables
            </span>

            <span className="block text-lg font-semibold sm:text-2xl md:text-xl lg:text-lg xl:text-2xl">
              Dine in
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="p-3 mb-10 bg-white border rounded-xl border-stroke dark:border-dark-3 dark:bg-dark-2">
          <Image
            src="/assets/order.png"
            alt="Dine in"
            className="w-full rounded-lg"
            height={720}
            width={720}
          />
          <div className="px-3 pt-6 pb-3">
            <span className="mb-1 text-base font-medium text-body-color dark:text-dark-6">
              #Rides
            </span>

            <span className="block text-lg font-semibold sm:text-2xl md:text-xl lg:text-lg xl:text-2xl">
              Order for Delivery
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="p-3 mb-10 bg-white border rounded-xl border-stroke dark:border-dark-3 dark:bg-dark-2">
          <Image
            src="/assets/takeout.jpg"
            alt="Dine in"
            className="w-full rounded-lg"
            height={720}
            width={720}
          />
          <div className="px-3 pt-6 pb-3">
            <span className="mb-1 text-base font-medium text-body-color dark:text-dark-6">
              #Kitchen
            </span>
            <span className="block text-lg font-semibold sm:text-2xl md:text-xl lg:text-lg xl:text-2xl">
              Take out
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
