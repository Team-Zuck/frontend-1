import { footerImg } from "@/public";
import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-pattern bg-cover bg-center opacity-10"></div>
      <div className="relative z-10">{children}</div>
      <div className="absolute bottom-0 w-full h-[80px] z-[-1]">
        <Image src={footerImg} alt="image" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default AuthLayout;
