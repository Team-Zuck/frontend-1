"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { bookMark, del, grid, pencil, task, todo } from "@/public";
import { MoveLeft, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Task = () => {
  return (
    <div className="w-full full">
      <div className="ml-[20px] xl:ml-[42px] flex items-center pt-[45px] gap-4">
        <Link href="/application">
          <MoveLeft className="size-6 text-primary" />
        </Link>
        <h1 className="text-lg text-[#244469]">Applications/Social</h1>
      </div>
      <div className="flex bg-white w-full justify-between xl:mt-[55px]  pr-4 flex-col xl:flex-row h-full pt-7">
        <div className="shadow-2xl w-[200px]">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-[200px] mt-4 flex items-center justify-center">
                <Plus className="mr-2" />
                New task
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
              <DialogTitle className="flex justify-center text-lg font-medium">
                Add task
              </DialogTitle>
              <div className="mt-4">
                <Label htmlFor="task-name">Add task</Label>
                <Input id="task-name" className="w-full mt-1" />
              </div>
              <div className="mt-4">
                <Label htmlFor="task-details">Task details</Label>
                <Textarea id="task-details" className="w-full mt-1" />
              </div>
              <div className="mt-4">
                <Label htmlFor="task-date">Select Date/Time</Label>
                <Input id="task-date" type="date" className="w-full mt-1" />
              </div>
              <div className="mt-4">
                <Label htmlFor="task-tag">Task tag</Label>
                <Input id="task-tag" className="w-full mt-1" />
              </div>
              <DialogFooter className="mt-6 flex justify-end space-x-2">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="button" variant="ghost">
                    Save Changes
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="flex gap-y-[17px] xl:pt-[33px] xl:flex-col ">
            <Button className="text-black bg-white w-[80%] flex gap-1">
              <Image src={task} width={16} height={16} alt="feed" /> All Tasks
            </Button>
            <Button className="bg-white w-[80%] text-black flex gap-1">
              {" "}
              <Image src={todo} width={20} height={20} alt="people" />
              Today's Task
            </Button>
            <Button className="w-[80%] bg-white text-black flex gap-1">
              <Image src={grid} width={20} height={20} alt="feed" />
              This Week Tasks
            </Button>
            <Button className="w-[80%] bg-white text-black flex gap-1">
              {" "}
              <Image src={bookMark} width={20} height={20} alt="feed" />
              Created by me
            </Button>
          </div>
        </div>
        <div
          className="bg-white w-full xl:w-[70%] h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]"
          style={{ boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)" }}
        >
          <h1 className="font-medium ">All task</h1>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium flex flex-col">
                  Internet Connection
                  <span className="text-[#4CAF50]">ASSIGNED BY: MANAGER</span>
                </TableCell>
                <TableCell>
                  Audit’s office Internet connection is faulty
                </TableCell>
                <TableCell className="text-right">
                  Jun 15
                  <span className="flex gap-x-2 justify-end">
                    <Image src={pencil} width={15} height={15} alt="pencil" />
                    <Image src={del} width={15} height={15} alt="delete" />
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex flex-col">
                  Internet Connection
                  <span className="text-[#4CAF50]">ASSIGNED BY: MANAGER</span>
                </TableCell>
                <TableCell>
                  Audit’s office Internet connection is faulty
                </TableCell>
                <TableCell className="text-right">
                  Jun 15
                  <span className="flex gap-x-2 justify-end">
                    <Image src={pencil} width={15} height={15} alt="pencil" />
                    <Image src={del} width={15} height={15} alt="delete" />
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex flex-col">
                  Internet Connection
                  <span className="text-[#4CAF50]">ASSIGNED BY: MANAGER</span>
                </TableCell>
                <TableCell>
                  Audit’s office Internet connection is faulty
                </TableCell>
                <TableCell className="text-right">
                  Jun 15
                  <span className="flex gap-x-2 justify-end">
                    <Image src={pencil} width={15} height={15} alt="pencil" />
                    <Image src={del} width={15} height={15} alt="delete" />
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex flex-col">
                  Internet Connection
                  <span className="text-[#4CAF50]">ASSIGNED BY: MANAGER</span>
                </TableCell>
                <TableCell>
                  Audit’s office Internet connection is faulty
                </TableCell>
                <TableCell className="text-right">
                  Jun 15
                  <span className="flex gap-x-2 justify-end">
                    <Image src={pencil} width={15} height={15} alt="pencil" />
                    <Image src={del} width={15} height={15} alt="delete" />
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex flex-col">
                  Internet Connection
                  <span className="text-[#4CAF50]">ASSIGNED BY: MANAGER</span>
                </TableCell>
                <TableCell>
                  Audit’s office Internet connection is faulty
                </TableCell>
                <TableCell className="text-right">
                  Jun 15
                  <span className="flex gap-x-2 justify-end">
                    <Image src={pencil} width={15} height={15} alt="pencil" />
                    <Image src={del} width={15} height={15} alt="delete" />
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex flex-col">
                  Internet Connection
                  <span className="text-[#4CAF50]">ASSIGNED BY: MANAGER</span>
                </TableCell>
                <TableCell>
                  Audit’s office Internet connection is faulty
                </TableCell>
                <TableCell className="text-right">
                  Jun 15
                  <span className="flex gap-x-2 justify-end">
                    <Image src={pencil} width={15} height={15} alt="pencil" />
                    <Image src={del} width={15} height={15} alt="delete" />
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex flex-col">
                  Internet Connection
                  <span className="text-[#4CAF50]">ASSIGNED BY: MANAGER</span>
                </TableCell>
                <TableCell>
                  Audit’s office Internet connection is faulty
                </TableCell>
                <TableCell className="text-right">
                  Jun 15
                  <span className="flex gap-x-2 justify-end">
                    <Image src={pencil} width={15} height={15} alt="pencil" />
                    <Image src={del} width={15} height={15} alt="delete" />
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

export default Task;
