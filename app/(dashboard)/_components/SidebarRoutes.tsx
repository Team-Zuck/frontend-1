import React from "react";
import SidebarItem from "./SidebarItem";
import { usePathname, useRouter } from "next/navigation";
import { employeeRoutes, organizationRoutes } from "@/constants";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

const SidebarRoutes = () => {
  const pathname = usePathname();
  const isOrganizationPage = pathname?.includes("/organization");
  const navigate = useRouter()
  const routes = isOrganizationPage ? organizationRoutes : employeeRoutes;

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
        <button>

        </button>
      </div>
    </div>
  );
};

export default SidebarRoutes;
