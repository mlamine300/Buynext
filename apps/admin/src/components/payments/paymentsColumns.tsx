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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  user: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "user",
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
            status === "pending" && "bg-amber-300/50",
            status === "success" && "bg-green-500/50",
            status === "failed" && "bg-red-500/50",
            status === "processing" && "bg-indigo-500/50"
          )}
        >
          {status as string}{" "}
        </p>
      );
    },
  },

  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="w-full flex justify-end">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium relative">{formatted}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;
      const id = row.original.id;

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
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </ContentItem>
              <p className="h-1 w-full bg-foreground/20" />
              <ContentItem className="px-2 hover:bg-foreground/20">
                <Link href={`/users/${id}`}> View customer</Link>
              </ContentItem>
              <ContentItem className="px-2 hover:bg-foreground/20">
                View payment details
              </ContentItem>
            </ContentMenu>
          </DropdownMenu>
        </div>
      );
    },
  },
];
