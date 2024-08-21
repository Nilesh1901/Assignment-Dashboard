import React from "react";
import Widget from "./Widget";
import AddwidgetCard from "./AddwidgetCard";

function Category({ category }) {
  return (
    <div className="p-6">
      <h2 className="font-semibold mb-2">{category.name}</h2>
      <div className="flex flex-wrap gap-4">
        {category.widgets.map(
          (widget) =>
            widget.isVisible && (
              <Widget
                categoryId={category.id}
                key={widget.id}
                widget={widget}
              />
            )
        )}
        <AddwidgetCard />
      </div>
    </div>
  );
}

export default Category;
