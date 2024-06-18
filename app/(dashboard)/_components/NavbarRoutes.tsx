"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { profile } from "@/public";
import SearchInput from "./SearchInput";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineUser } from 'react-icons/ai'
import { auth } from "@/firebaseConfig";

const NavbarRoutes = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <div className="hidden md:block">
        <SearchInput />
      </div>
      <div className="flex gap-2 ml-auto">

        {user?.photoURL ? <Image src={user && user.photoURL} width={30} height={30} className="rounded-full " alt="profile" />
          :
          <AiOutlineUser size={30} />}
        <div>
          <p className="text-sm">{user ? <>
            {user?.displayName ? user.displayName : user?.email}
          </> :
            <>
              guest
            </>
          }</p>
          <p className="text-xs">Accountant</p>
        </div>
      </div >
    </>
  );
};

export default NavbarRoutes;
