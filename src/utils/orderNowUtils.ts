import { menu } from "@/data/menu";
import { Menu } from "@/types/menuTypes";

export const getCategories = () => {
  const categories = Array.from(new Set(menu.map((item) => item.category)));
  categories.unshift("All");
  return categories;
};

export const filterMenuByCategory = (category: string | null): Menu[] => {
  if (category === "All" || !category) return menu;
  return menu.filter((item) => item.category === category);
};
