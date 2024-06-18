import React from "react";

interface CardProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  number: string;
  trend: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const Card = ({ icon: Icon, label, number, trend: Trend, text }: CardProps) => {
  return (
    <div className="w-[211px] h-[118px] rounded-[15px] bg-white shadow-md p-4">
      <div className="flex gap-x-2 items-center">
        <span className="text-[16px] font-medium">{label}</span>
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex items-center">
        <span className="font-semibold text-[24px]">{number}</span>
        <span className="flex gap-x-2">
          <Trend className="h-6 w-6" /> 15%
        </span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Card;
