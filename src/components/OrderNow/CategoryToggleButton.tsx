import { Icon } from "@iconify/react";
import React from "react";

type Props = {
  onClick: () => void;
  onMouseDown: (e: React.MouseEvent) => void;
  position: { x: number; y: number };
};

const CategoryToggleButton = ({ onClick, onMouseDown, position }: Props) => (
  <button
    onClick={onClick}
    onMouseDown={onMouseDown}
    aria-label="Open filter sidebar"
    className="group xl:hidden fixed z-100 flex items-center justify-center rounded-md cursor-move "
    style={{ left: `${position.x}px`, top: `${position.y}px` }}
  >
    <div className="flex">
      <div className=" p-2 bg-white rounded-md shadow-sm/20">
        <Icon icon="heroicons:funnel" className="text-2xl" />
      </div>
      <span className="ml-2 transform -translate-x-3 opacity-0 scale-90 group-hover:translate-x-0  group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-left whitespace-nowrap">
        Filter
      </span>
    </div>
  </button>
);

export default CategoryToggleButton;
