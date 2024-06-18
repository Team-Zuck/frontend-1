import { applicationCard } from "@/constants";
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
        {applicationCard.map((card, index) => (
          <Link href={`/${card.route}`}>
            <Card
              key={index}
              icon={card.icon}
              label={card.label}
              textArr={card.textArr}
              color={card.color}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HR;
