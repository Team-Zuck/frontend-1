"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {
  arrowUp,
  bookMark,
  check,
  circle1,
  grid,
  orange,
  task,
  todo,
} from "@/public";
import Image from "next/image";
import LineChart from "./organization/hr/_components/Chart";

export default function Home() {
  return (
    <div className="w-full full">
      <div className="ml-[42px] flex flex-col justify-center items-start pt-[45px]">
        <h1 className="text-4xl font-semibold text-[#244469]">Dashboard</h1>
        <p className="text-lg text-[#5C5C5C]">Here's your analytics</p>
      </div>

      <div className="flex bg-white w-full justify-between xl:mt-[55px]  pr-4 flex-col xl:flex-row h-full pt-7">
        <div className="shadow-2xl w-[200px]">
          <div className="flex gap-y-[17px] xl:pt-[33px] xl:flex-col ">
            <Button className=" w-[80%] flex gap-1">
              <Image
                src={task}
                width={16}
                height={16}
                alt="feed"
                className="text-white"
              />
              Tasks
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
          className="bg-white w-full xl:w-[70%] min-h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]"
          style={{ boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex flex-wrap gap-4">
            <div className="w-[211px] h-[118px] rounded-[15px] bg-white shadow-md p-6">
              <div className="flex items-center">
                <h2 className="text-[16px] font-medium">Finished</h2>
                <Image
                  src={check}
                  alt="icon"
                  width={20}
                  height={20}
                  className="ml-7"
                />
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold text-[24px] mr-5">21</h3>
                <span className="flex">
                  <Image src={arrowUp} alt="icon" width={15} height={15} /> +15
                  tasks
                </span>
              </div>
              <p className="text-sm mt-2">Analytics for this month</p>
            </div>
            <div className="w-[211px] h-[118px] rounded-[15px] bg-white shadow-md p-6">
              <div className="flex items-center">
                <h2 className="text-[16px] font-medium">Tracked</h2>
                <Image
                  src={circle1}
                  alt="icon"
                  width={20}
                  height={20}
                  className="ml-7"
                />
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold text-[24px] mr-5">13h</h3>
                <span className="flex">
                  <Image src={arrowUp} alt="icon" width={15} height={15} /> -5
                  hours
                </span>
              </div>
              <p className="text-sm mt-2">Analytics for this month</p>
            </div>
            <div className="w-[211px] h-[118px] rounded-[15px] bg-white shadow-md p-6">
              <div className="flex items-center">
                <h2 className="text-[16px] font-medium">Efficiency</h2>
                <Image
                  src={check}
                  alt="icon"
                  width={20}
                  height={20}
                  className="ml-7"
                />
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold text-[24px] mr-5">21</h3>
                <span className="flex">
                  <Image src={arrowUp} alt="icon" width={15} height={15} /> +35%
                </span>
              </div>
              <p className="text-sm mt-2">Analytics for this month</p>
            </div>
          </div>
          <LineChart />

          <div className="flex items-center mt-7 justify-between">
            <div className="flex items-center gap-x-6">
              <h4 className="text-[24px] font font-semibold">Current Tasks</h4>
              <p className="text-[20px] font-semibold">Done 40%</p>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select task" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">All task</SelectItem>
                  <SelectItem value="dark">Some task</SelectItem>
                  <SelectItem value="system">Maybe</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium flex gap-x-2">
                  <Image src={task} width={15} height={15} alt="icon" />
                  Product Review for servers
                </TableCell>
                <TableCell className="relative">
                  <span>
                    <Image
                      src={orange}
                      width={10}
                      height={10}
                      alt="icon"
                      className="absolute left-0 bottom-5"
                    />
                  </span>
                  In progress
                </TableCell>
                <TableCell>4h</TableCell>
                <TableCell className="text-right font-bold">...</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
