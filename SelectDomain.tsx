import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { categoriesSelect } from '@/utils/constant';



const SelectDomain = ({ watch, onChange }: { watch: any; onChange: (id: string, value: any) => void }) => {
  const selectedCategories = watch("category");

  const handleCheckboxChange = (id: string) => {
    const updatedCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((categoryId: string) => categoryId !== id)
      : [...selectedCategories, id];
    onChange("category", updatedCategories);
  };

  return (
    <ScrollArea className="h-72 w-64 rounded-md border p-4 ml-4">
      {categoriesSelect.map((category) => (
        <div key={category.id} className="flex items-center space-x-2 mb-4">
          <Checkbox
            id={category.id}
            checked={selectedCategories.includes(category.id)}
            onChange={() => handleCheckboxChange(category.id)}
          />
          <HoverCard>
            <HoverCardTrigger asChild>
              <label
                htmlFor={category.id}
                className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.label}
              </label>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 ml-3">
              <p className="text-sm p-3">{category.description}</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </ScrollArea>
  );
};

export default SelectDomain;
