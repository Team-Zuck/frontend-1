import { routes } from "@/constants";
import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarRoutes = () => {
  return (
    <div className="border border-dotted border-[#244469] h-[488px] rounded-[10px] py-[54px]">
      <div className="flex flex-col w-full gap-[10px]">
        {routes.map((route) => (
          <SidebarItem
            key={route.route}
            icon={route.icon}
            label={route.label}
            href={route.route}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarRoutes;
