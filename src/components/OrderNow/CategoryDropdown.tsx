import { menu } from "@/data/menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

type DishFilterTypes = {
  category: string;
  activeCategory: string | null;
  onClick: (category: string | null) => void;
};

type CategoryTypes = {
  activeCategory: string | null;
  onClick: (category: string | null) => void;
};

const CategoryItem = ({
  category,
  activeCategory,
  onClick,
}: DishFilterTypes) => {
  return (
    <button
      className={`px-4 py-1 shadow-sm rounded-sm hover:cursor-pointer text-start ${
        activeCategory === category ? "bg-lemon-500 text-charcoal-500" : ""
      }`}
      onClick={() => onClick(category === activeCategory ? null : category)}
    >
      {category}
    </button>
  );
};

const CategoryDropdown = ({ activeCategory, onClick }: CategoryTypes) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  const categories = Array.from(new Set(menu.map((item) => item.category)));
  categories.unshift("All");

  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${
          toggleDropdown && "shadow-filter"
        }`}
      >
        <p className="text-dark">Category</p>
        <button
          aria-label="button for category dropdown"
          className={`text-dark ease-out duration-200 ${
            toggleDropdown && "rotate-180"
          }`}
        >
          <Icon icon="heroicons:chevron-down-20-solid" className="text-2xl" />
        </button>
      </div>

      <div
        className={`flex-col gap-3 py-6 pl-6 pr-5.5 ${
          toggleDropdown ? "flex" : "hidden"
        }`}
      >
        {categories.map((category, key) => (
          <CategoryItem
            key={key}
            category={category}
            activeCategory={activeCategory}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;
