import React, { useContext } from "react";
import AddwidgetBtn from "./AddwidgetBtn";
import { DashboardContext } from "../store/DashboardContext";

function AddwidgetCard() {
  const { setIsActiveSideBar } = useContext(DashboardContext);
  return (
    <div className="w-96 h-52 rounded-md bg-white opacity-75 shadow-md p-4 flex justify-center items-center">
      <AddwidgetBtn
        handleClick={() => setIsActiveSideBar((prev) => !prev)}
        right={true}
      />
    </div>
  );
}

export default AddwidgetCard;
