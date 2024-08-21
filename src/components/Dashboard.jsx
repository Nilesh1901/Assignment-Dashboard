import CategoriesSection from "./CategoriesSection";
import { useContext } from "react";
import { DashboardContext } from "../store/DashboardContext";
import SideBar from "./SideBar";
import NavBar from "./Navbar";

function Dashboard() {
  const { isActiveSideBar } = useContext(DashboardContext);

  return (
    <div className="bg-black min-h-screen relative">
      <div
        className={`transition-opacity duration-300 ${
          isActiveSideBar ? "opacity-40" : "opacity-100"
        }`}
      >
        <NavBar />
        <CategoriesSection />
      </div>
      <SideBar />
    </div>
  );
}

export default Dashboard;
