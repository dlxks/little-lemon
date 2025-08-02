type MenuFilterTypes = {
  category: string;
  activeCategory: string | null;
  onClick: (category: string | null) => void;
};

const MenuFilter = ({ category, activeCategory, onClick }: MenuFilterTypes) => {
  return (
    <button
      onClick={() => onClick(category === activeCategory ? null : category)}
      className={`px-4 border border-olive-500 rounded-full transition duration-150 hover:cursor-pointer hover:bg-lemon-500  hover:text-charcoal-500 ${
        activeCategory === category ? "bg-lemon-500 text-charcoal-500" : ""
      }`}
    >
      {category}
    </button>
  );
};

export default MenuFilter;
