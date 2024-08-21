import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { DashboardContext } from "../store/DashboardContext";

function Widget({ categoryId, widget }) {
  const { toggleWidget } = useContext(DashboardContext);
  return (
    <div className="w-96 h-52 relative rounded-md bg-white shadow-md p-4">
      <RxCross1
        onClick={() => {
          toggleWidget(categoryId, widget?.id);
        }}
        className="text-lg cursor-pointer absolute right-4"
      />
      <h2 className="font-medium">{widget?.name}</h2>
      <p className="mt-8 text-neutral-700">{widget?.text}</p>
    </div>
  );
}

export default Widget;
