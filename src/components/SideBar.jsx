import React, { useContext, useState } from "react";
import { DashboardContext } from "../store/DashboardContext";
import SideBarHeading from "./SideBarHeading";
import SideBarWidgetSection from "./SideBarWidgetSection";

function SideBar() {
  const { isActiveSideBar, categories } = useContext(DashboardContext);
  const [activeCategoryTab, setActiveCategoryTab] = useState(
    categories[0].name
  );

  return (
    <div
      className={`bg-white z-50 fixed h-full w-[40%] right-0 top-0 shadow-md transform transition-transform duration-500 ${
        isActiveSideBar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <SideBarHeading
        activeCategoryTab={activeCategoryTab}
        setActiveCategoryTab={setActiveCategoryTab}
      />
      <SideBarWidgetSection activeCategoryTab={activeCategoryTab} />
    </div>
  );
}

export default SideBar;
