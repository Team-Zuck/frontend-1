"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { profile } from "@/public";
import SearchInput from "./SearchInput";

const NavbarRoutes = () => {
  return (
    <>
      <div className="hidden md:block">
        <SearchInput />
      </div>
      <div className="flex gap-2 ml-auto">
        <Image src={profile} width={30} height={30} alt="profile" />

        <div>
          <p className="text-sm">James Johnson</p>
          <p className="text-xs">Accountant</p>
        </div>
      </div>
    </>
  );
};

export default NavbarRoutes;
