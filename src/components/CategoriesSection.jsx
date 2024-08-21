import React, { useContext } from "react";
import { DashboardContext } from "../store/DashboardContext";
import Category from "./Category";

function CategoriesSection() {
  const { categories, searchTerm } = useContext(DashboardContext);
  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const hasResults = filteredCategories.some(
    (category) => category.widgets.length > 0
  );

  return (
    <div className={`bg-slate-200 min-h-screen  grid grid-rows-auto  gap-y-4 `}>
      {hasResults ? (
        filteredCategories.map(
          (category) =>
            category.widgets.length > 0 && (
              <Category key={category.id} category={category} />
            )
        )
      ) : (
        <p className="text-center text-gray-500 mt-8 text-lg">
          No widgets found matching "{searchTerm}"
        </p>
      )}
    </div>
  );
}

export default CategoriesSection;
