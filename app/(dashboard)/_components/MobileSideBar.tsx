import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Sidebar from "./Sidebar";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition-all">
        <Image src="/icons/menu.svg" height={24} width={24} alt="menu" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
