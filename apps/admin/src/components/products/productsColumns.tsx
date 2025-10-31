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
import { ProductType } from "@repo/types";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ProductType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "images",
    header: "Image",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <Image
          src={(product.images as any)[product.colors.at(0) as string] || ""}
          alt={product.name}
          width={100}
          height={100}
          className="w-12 h-12 rounded m-1"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "shortDescription",
    header: "Description",
  },

  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div className="w-full flex justify-end">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },

    cell: ({ row }) => {
      const product = row.original;

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(product.price);

      return <div className="text-right font-medium relative">{formatted}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

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
                onClick={() => navigator.clipboard.writeText(product.id + "")}
              >
                Copy payment ID
              </ContentItem>
              <p className="h-1 w-full bg-foreground/20" />
              <ContentItem className="px-2 hover:bg-foreground/20">
                <Link href={`/products/${product.id}`}> View customer</Link>
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
