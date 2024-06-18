"use client";
import React, { ReactNode } from "react";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-full min-h-screen">
      <div className="md:pl-64 fixed inset-y-0 w-full h-[80px] z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-64 h-full pt-[80px] relative">{children}</main>
      <div className="absolute inset-0 bg-pattern bg-cover bg-center opacity-10 z-[-1]"></div>
    </div>
  );
};

export default layout;
