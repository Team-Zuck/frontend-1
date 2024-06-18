import { Button } from "@/components/ui/button";
import { feed, page, people, setting, social1, social2 } from "@/public";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <div className="w-full full">
      <div className="ml-[20px] xl:ml-[42px] flex items-center pt-[45px] gap-4">
        <Link href="/employee/application">
          <MoveLeft className="size-6 text-primary" />
        </Link>
        <h1 className="text-lg text-[#244469]">Applications/Social</h1>
      </div>
      <div className="flex bg-white w-full justify-between mt-[30px] xl:mt-[55px] py-[66px] pr-4 flex-col xl:flex-row">
        <div className="flex w-fit xl:w-[200px] gap-y-[17px] xl:pt-[63px] xl:flex-col shadow-xl">
          <Button className="bg-primary w-[80%] flex gap-1">
            <Image src={feed} width={16} height={16} alt="feed" /> New feed
          </Button>
          <Button className="bg-white w-[80%] text-black flex gap-1">
            {" "}
            <Image src={people} width={20} height={20} alt="people" />
            People
          </Button>
          <Button className="w-[80%] bg-white text-black flex gap-1">
            <Image src={page} width={20} height={20} alt="feed" />
            Page
          </Button>
          <Button className="w-[80%] bg-white text-black flex gap-1">
            {" "}
            <Image src={setting} width={20} height={20} alt="feed" />
            Settings
          </Button>
        </div>
        <div className="bg-white w-full xl:w-[70%] h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px] flex">
          <Image
            src={social1}
            alt="social"
            width={300}
            height={458}
            className="object-cover"
          />
          <Image src={social2} alt="social" width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Social;
