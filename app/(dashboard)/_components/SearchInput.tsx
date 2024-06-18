import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative">
      <SearchIcon className="size-4 absolute top-3 left-3 text-slate-600" />
      <Input
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Search for a course..."
      />
    </div>
  );
};

export default SearchInput;
