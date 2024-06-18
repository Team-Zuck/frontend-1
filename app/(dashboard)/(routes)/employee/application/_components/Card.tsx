import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  color: string;
  label: string;
  textArr: string[];
}

const Card = ({ icon: Icon, color, label, textArr }: CardProps) => {
  return (
    <div className="w-[250px] h-[184px] rounded-[15px] bg-white shadow-md p-4">
      <div
        className="w-10 h-10 flex items-center justify-center rounded-full"
        style={{ backgroundColor: color }}
      >
        <Icon className="text-white" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold" style={{ color: color }}>
          {label}
        </h3>
        <ul className="mt-2 space-y-1">
          {textArr.map((text, index) => (
            <li key={index} className="text-sm text-gray-600">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
