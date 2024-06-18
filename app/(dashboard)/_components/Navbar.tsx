import React from "react";
import MobileSideBar from "./MobileSideBar";
import NavbarRoutes from "./NavbarRoutes";

const Navbar = () => {
  return (
    <div className="flex w-full border-b items-center justify-between bg-white shadow-md h-full px-4">
      <MobileSideBar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
