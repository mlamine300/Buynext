"use client";

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import DropdownMenu, {
  ButtonTrigger,
  ContentItem,
  ContentMenu,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ArrowUpDown, MoreHorizontal, MoreVertical } from "lucide-react";
import Link from "next/link";
import { User } from "@/app/users/page";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex items-center gap-4">
          <Image
            src={user.avatar}
            alt={user.fullName}
            width={100}
            height={100}
            className="w-10 h-10 rounded-full"
          />
          <h3 className="font-semibold">{user.fullName} </h3>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <p
          className={cn(
            " text-center font-semibold text-sm p-1  rounded",

            status === "active" && "bg-green-500/50",
            status === "inactive" && "bg-red-500/50"
          )}
        >
          {status as string}{" "}
        </p>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="relative">
          <DropdownMenu>
            <ButtonTrigger>
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </ButtonTrigger>
            <ContentMenu
              position="left"
              className="flex flex-col items-start p-1 font-semibold text-sm gap-4"
            >
              <h3 className="font font-semibold">Actions</h3>
              <ContentItem
                className="px-2 hover:bg-foreground/20"
                onClick={() => navigator.clipboard.writeText(user.id)}
              >
                Copy payment ID
              </ContentItem>
              <p className="h-1 w-full bg-foreground/20" />
              <ContentItem className="px-2 hover:bg-foreground/20">
                <Link href={`/users/${user.id}`}> View customer</Link>
              </ContentItem>
            </ContentMenu>
          </DropdownMenu>
        </div>
      );
    },
  },
];
