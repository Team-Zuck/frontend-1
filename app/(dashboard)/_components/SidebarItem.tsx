import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SidebarItem = ({
  icon: Icon,
  href,
  label,
}: {
  icon: LucideIcon;
  href: string;
  label: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    (pathname.startsWith(`${href}`) && href !== "/");

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-400 text-sm font-medium mx-6 transition-all hover:text-slate-600 border-b border-[#244469] border-dotted ",
        isActive && "text-primary  hover:text-primary"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-400", isActive && "text-primary")}
        />
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
