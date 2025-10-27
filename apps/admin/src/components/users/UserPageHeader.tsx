import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserPageHeader = () => {
  const root = [
    { title: "Dashboard", href: "/" },
    { title: "Users", href: "/users" },
    { title: "John Doe", href: "#" },
  ];
  return (
    <div className="flex gap-1">
      {root.map((r, index: number) => (
        <div key={index} className="flex items-center gap-2 ">
          <Link className="text-sm font-semibold " href={r.href}>
            {r.title}
          </Link>
          {index < root.length - 1 ? (
            <ChevronRight className="text-sm w-5 h-4" />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default UserPageHeader;
