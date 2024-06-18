import { applicationCard, hrCard } from "@/constants";
import Link from "next/link";
import React from "react";
import Card from "./_components/Card";

const HR = () => {
  return (
    <div className="w-full full">
      <div className="ml-[42px] flex flex-col justify-center items-start pt-[45px]">
        <h1 className="text-4xl font-semibold text-[#244469]">HR Dashboard</h1>
        {/* <p className="text-lg text-[#5C5C5C]">Here's your analytics</p> */}
      </div>

      <div
        className="bg-white w-[98%] h-[800px] flex flex-wrap gap-8 p-[65px] "
        style={{ marginLeft: "2%" }}
      >
        {/* {hrCard.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              label={card.label}
              number={card.number}
              trend={card.trend}
            />
        ))} */}
      </div>
    </div>
  );
};

export default HR;
