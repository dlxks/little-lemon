import { Icon } from "@iconify/react";
import CategoryDropdown from "./CategoryDropdown";

type Props = {
  show: boolean;
  onClose: () => void;
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
};

const FilterSidebar = ({
  show,
  onClose,
  activeCategory,
  onCategoryChange,
}: Props) => (
  <div
    className={`fixed z-50 top-0 left-0 h-screen w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
      show ? "translate-x-0" : "-translate-x-full"
    } xl:static xl:translate-x-0 xl:block xl:shadow-none`}
  >
    <div className="flex items-center justify-between p-4 shadow-sm/20 shadow-charcoal-500xl:hidden">
      <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
        <Icon icon="heroicons:x-mark" className="text-xl" />
      </button>
    </div>

    <form
      onSubmit={(e) => e.preventDefault()}
      className="p-5 flex flex-col gap-6"
    >
      <div className="flex items-center justify-between">
        <p className="font-medium">Filters:</p>
        <button
          type="button"
          onClick={() => onCategoryChange(null)}
          className="bg-lemon-500 text-charcoal-500 px-4 py-1 rounded-full shadow-sm/20 shadow-charcoal-500 hover:bg-olive-500 hover:text-white ease-in-out duration-300 hover:cursor-pointer"
        >
          Clear Filter
        </button>
      </div>
      <CategoryDropdown
        activeCategory={activeCategory}
        onClick={onCategoryChange}
      />
    </form>
  </div>
);

export default FilterSidebar;
