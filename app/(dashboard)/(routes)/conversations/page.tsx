import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { heart, message, trash } from "@/public";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Conversations = () => {
  return (
    <div className="w-full full">
      <div className="ml-[20px] xl:ml-[42px] flex items-center pt-[45px] gap-4">
        <Link href="/application">
          <MoveLeft className="size-6 text-primary" />
        </Link>
        <h1 className="text-lg text-[#244469]">Applications/Conversations</h1>
      </div>
      <div className="flex bg-white w-full justify-between xl:mt-[55px]  pr-4 flex-col xl:flex-row h-full pt-7">
        <div className="bg-white w-full h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Position</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Raphael Onunkwor</TableCell>
                <TableCell>raphael.onun@gmail.com</TableCell>
                <TableCell>Software Developer</TableCell>
                <TableCell className="text-right">
                  <span>
                    <Image src={heart} width={15} height={15} alt="icon" />
                    <Image src={message} width={15} height={15} alt="icon" />
                    <Image src={trash} width={15} height={15} alt="icon" />
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
