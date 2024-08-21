import React, { useContext } from "react";
import { DashboardContext } from "../store/DashboardContext";

function SideBarWidgetSection({ activeCategoryTab }) {
  const { categories } = useContext(DashboardContext);

  const currentCategoryTab = categories.filter(
    (category) => category.name === activeCategoryTab
  );

  return (
    <div className="px-12 py-2">
      {currentCategoryTab[0]?.widgets.map((widget) => (
        <SideBarWidgetCheckBox
          categoryId={currentCategoryTab[0].id}
          widget={widget}
          key={widget.id}
        />
      ))}
    </div>
  );
}

function SideBarWidgetCheckBox({ widget, categoryId }) {
  const { toggleWidget } = useContext(DashboardContext);
  function handleCheckboxChange() {
    toggleWidget(categoryId, widget.id);
  }
  return (
    <div
      key={widget.id}
      className="border p-2 border-slate-300 flex items-center rounded mb-2"
    >
      <input
        id={widget.id}
        type="checkbox"
        checked={widget.isVisible}
        className="mr-4"
        onChange={handleCheckboxChange}
      />
      <label htmlFor={widget.id}>{widget?.name}</label>
    </div>
  );
}

export default SideBarWidgetSection;
