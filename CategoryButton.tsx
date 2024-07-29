"use client";
import React, { useRef, useEffect } from "react";
import { FieldValues, UseFormWatch } from "react-hook-form";

import { cn } from "@/utils/helper";
import { Category } from "@/types";

interface CategoryButtonProps extends Category {
  onClick: (fieldName: string, value: string) => void;
  watch: UseFormWatch<FieldValues>;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  icon: Icon,
  label,
  color,
  onClick,
  watch,
}) => {
  const isSelected = watch("category") === label;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    const timer = setTimeout(() => {
      if(isSelected){
        buttonRef.current?.focus();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [isSelected]);

  const handleChange = () => {
    if(isSelected) return;
    onClick("category", label);
  };

  return (
    <div className="col-span-1">
      <button
        ref={buttonRef}
        type="button"
        onClick={handleChange}
        className={cn(
          `rounded-xl  border-2 p-2 flex flex-col gap-3  hover:border-black cursor-pointer transition duration-200 w-full`,
          isSelected ? "border-black" : "border-neutral-200"
        )}
        onFocus={handleChange}
      >
        <Icon size={30} color={color} />
        <div className="font-semibold">
          {label}
        </div>
      </button>
    </div>
  );
};

export default CategoryButton;
