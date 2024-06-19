"use client";
import { Button } from "@/components/ui/button";
import { arrowUp, bookMark, check, grid, task, todo, trend } from "@/public";
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
          </div>
          <LineChart />
        </div>
      </div>
    </div>
  );
}
