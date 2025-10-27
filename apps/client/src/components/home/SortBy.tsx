"use client";
import React, { useState } from "react";
import { SelectList } from "../ui/SelectList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const options = [
  { title: "Newest", key: "newest" },
  { title: "Oldest", key: "oldest" },
  { title: "Price : Low to High", key: "chipest" },
  { title: "Price : High to Low", key: "expensive" },
];
const SortBy = () => {
  const searchParams = useSearchParams();
  const sortBy =
    options.filter((o) => o.key === searchParams.get("sort")).at(0) ||
    options.at(0);

  const router = useRouter();
  const path = usePathname();

  const handleSortBy = (option: { key: string; title: string } | undefined) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", option?.key || "");
    router.push(`${path}?${params.toString()}`);
  };
  return (
    <div className="flex items-center gap-1 w-full justify-end ">
      <h4 className="text-text-muted">Sort by :</h4>
      <SelectList
        className="w-36 text-text-secondary"
        value={sortBy?.title || "Newest"}
        onValueChange={(t: string) => {
          handleSortBy(options.filter((o) => o.title === t).at(0));
        }}
        list={options.map((l) => l.title)}
      />
    </div>
  );
};

export default SortBy;
