"use client";
import { hrCard } from "@/constants";
import React from "react";
import Card from "./_components/Card";
import LineChart from "./_components/Chart";

const HR = () => {
  return (
    <div className="w-full full">
      <div className="ml-[42px] flex flex-col justify-center items-start pt-[45px]">
        <h1 className="text-4xl font-semibold text-[#244469]">HR Dashboard</h1>
        {/* <p className="text-lg text-[#5C5C5C]">Here's your analytics</p> */}
      </div>

      <div className="bg-white h-[800px]">
        <div
          className=" w-[98%]  flex flex-wrap gap-2 p-8 "
          style={{ marginLeft: "2%" }}
        >
          {hrCard.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              label={card.label}
              number={card.number}
              trend={card.trend}
              text={card.text}
            />
          ))}
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default HR;
