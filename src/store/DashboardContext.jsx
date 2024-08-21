import React, { useState, createContext } from "react";
import initialData from "../data";

// Context and Provider
export const DashboardContext = createContext({
  categories: [],
  toggleWidget: (categoryId, widgetId) => {},
  isActiveSideBar: Boolean,
  setIsActiveSideBar: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
});

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isActiveSideBar, setIsActiveSideBar] = useState(false);

  const toggleWidget = (categoryId, widgetId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === categoryId) {
          const updatedWidgets = category.widgets.map((widget) =>
            widget.id === widgetId
              ? { ...widget, isVisible: !widget.isVisible }
              : widget
          );
          return { ...category, widgets: updatedWidgets };
        }
        return category;
      })
    );
  };

  return (
    <DashboardContext.Provider
      value={{
        categories,
        toggleWidget,
        isActiveSideBar,
        setIsActiveSideBar,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
