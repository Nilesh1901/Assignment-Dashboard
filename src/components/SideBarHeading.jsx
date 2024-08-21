import React, { useContext } from "react";
import { DashboardContext } from "../store/DashboardContext";
import { RxCross1 } from "react-icons/rx";

function SideBarHeading({ activeCategoryTab, setActiveCategoryTab }) {
  const { setIsActiveSideBar, categories } = useContext(DashboardContext);

  return (
    <div className="heading">
      <div className="top-heading p-2 px-4 text-white text-sm bg-violet-800 flex justify-between items-center">
        <span>Add Widget</span>
        <RxCross1
          className="text-lg cursor-pointer"
          onClick={() => setIsActiveSideBar((prev) => !prev)}
        />
      </div>
      <div className="bottom-heading p-3 text-sm">
        <p>Personalize your dashboard by adding the following widget</p>
        <div className="ml-3 font-medium text-zinc-500 mt-4 text-sm flex border-b-2 pb-3 w-52">
          {categories.map((category) => (
            <div
              onClick={() => setActiveCategoryTab(category.name)}
              key={category.id}
              className={`mr-8 cursor-pointer relative ${
                activeCategoryTab === category.name && "text-black"
              } `}
            >
              {category.name.split(" ")[0]}
              {activeCategoryTab === category.name && (
                <div className="border-b-2 absolute top-8 border-blue-500 w-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBarHeading;
