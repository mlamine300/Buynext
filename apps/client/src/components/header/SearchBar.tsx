/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
const MOBILE_MAX_WIDTH = 768;
const SearchBar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > MOBILE_MAX_WIDTH);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [search, setsearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(search);
    setsearch("");
    setOpen(false);
  };
  return (
    <>
      {open ? (
        <form
          onSubmit={handleSubmit}
          className="flex w-48 p-1  items-center gap-2 h-[80%] z-10 shadow-lg border border-border rounded"
        >
          <HiOutlineMagnifyingGlass className="ml-1 h-5 w-5 text-text-secondary" />
          <input
            type="text"
            className="w-full border-none outline-none text-sm"
            placeholder="Search..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </form>
      ) : (
        <HiOutlineMagnifyingGlass
          onClick={() => setOpen(true)}
          className="ml-1 h-6 w-6 text-text-secondary hover:text-primary cursor-pointer hover:w-7 hover:h-7"
        />
      )}
    </>
  );
};

export default SearchBar;
