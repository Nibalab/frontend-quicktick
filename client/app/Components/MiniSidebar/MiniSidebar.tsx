"use client";
import IconFileCheck from "@/public/icons/IconFileCheck";
import IconGrid from "@/public/icons/IconGrid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MiniSidebar() {
  const pathname = usePathname();
  const getStrokeColor = (link: string) => {
    return pathname === link ? "#3aafae" : "#71717a";
  };
  const navItems = [
    {icon: <IconGrid strokeColor={getStrokeColor("/")} />, title: "All", link: "/",},
    {icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />, title: "Completed", link: "/completed", },
  ];
  return (
    <div className="basis-[5rem] flex flex-col bg-[#f9f9f9]">
      <div className="mt-8 flex-1 flex flex-col items-center justify-between pt-20">
        <ul className="flex flex-col gap-10">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link href={item.link}>{item.icon}</Link>
              <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#3aafae] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MiniSidebar;
