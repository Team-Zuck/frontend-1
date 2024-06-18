import { logo } from "@/public";
import Image from "next/image";
import React from "react";
import SidebarRoutes from "./SidebarRoutes";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm px-4">
      <div className="p-6">
        <Image src={logo} width={181} height={43} alt="logo" />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
