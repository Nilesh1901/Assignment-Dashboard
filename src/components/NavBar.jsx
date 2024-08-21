import React, { useContext, useEffect, useState } from "react";
import AddwidgetBtn from "./AddwidgetBtn";
import { DashboardContext } from "../store/DashboardContext";

function NavBar() {
  const { setIsActiveSideBar, setSearchTerm } = useContext(DashboardContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <nav className="p-4 border-b bg-white">
      <div className="flex justify-between items-center ">
        <input
          className="rounded w-96 text-sm"
          type="text"
          placeholder="Search anything..."
          onChange={handleSearch}
        />
        <AddwidgetBtn handleClick={() => setIsActiveSideBar((prev) => !prev)} />
      </div>
    </nav>
  );
}

export default NavBar;
