"use client";

import CategoryDropdown from "@/components/OrderNow/CategoryDropdown";
import CategoryToggleButton from "@/components/OrderNow/CategoryToggleButton";
import FilterSidebar from "@/components/OrderNow/FilterSidebar";
import OrderGridLayout from "@/components/OrderNow/OrderGridLayout";
import OrderListLayout from "@/components/OrderNow/OrderListLayout";
import MenuModal from "@/components/OrderNow/OrderModal";
import { menu } from "@/data/menu";
import { useDraggableButton } from "@/hooks/useDraggableButton";
import { LayoutType } from "@/types/layoutTypes";
import { Menu } from "@/types/menuTypes";
import { filterMenuByCategory, getCategories } from "@/utils/orderNowUtils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const OrderOnline = () => {
  const [productLayout, setProductLayout] = useState("grid");
  const [productSidebar, setProductSidebar] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const { position, handleMouseDown } = useDraggableButton();
  const categories = getCategories;
  const filteredDishes = filterMenuByCategory(activeCategory);

  return (
    <section className="py-[40px] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-2 md:px-4 lg:px-8">
        <div className="flex gap-7.5">
          <CategoryToggleButton
            onClick={() => setProductSidebar(!productSidebar)}
            onMouseDown={handleMouseDown}
            position={position}
          />
          <FilterSidebar
            show={productSidebar}
            onClose={() => setProductSidebar(false)}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="xl:max-w-[870px] w-full pb-16">
            <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
              <div className="flex items-center justify-end">
                {/* <div className="flex flex-wrap items-center gap-4">
                  Test
                  <p>
                    Showing <span className="text-dark">9 of 50</span> Products
                  </p>
                </div> */}

                <div className="flex items-center gap-1.5">
                  {["grid", "list"].map((layout) => (
                    <button
                      key={layout}
                      onClick={() => setProductLayout(layout as LayoutType)}
                      aria-label={`button for product ${layout} tab`}
                      className={`${
                        productLayout === layout
                          ? "bg-lemon-500 text-charcoal-500"
                          : "text-charcoal-500"
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] hover:bg-lemon-400 hover:text-charcoal-400`}
                    >
                      <span className="text-2xl">
                        {layout === "grid" ? (
                          <Icon
                            icon="material-symbols:grid-view-outline-rounded"
                            className="text-2xl"
                          />
                        ) : (
                          <Icon
                            icon="material-symbols:lists-rounded"
                            className="text-2xl"
                          />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`${
                productLayout === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9"
                  : "flex flex-col gap-7.5"
              }`}
            >
              {filteredDishes.map((item, key) =>
                productLayout === "grid" ? (
                  <OrderGridLayout
                    item={item}
                    key={key}
                    onViewDetails={setSelectedMenu}
                  />
                ) : (
                  <OrderListLayout
                    item={item}
                    key={key}
                    onViewDetails={setSelectedMenu}
                  />
                )
              )}
              <MenuModal
                item={selectedMenu}
                onClose={() => setSelectedMenu(null)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderOnline;
