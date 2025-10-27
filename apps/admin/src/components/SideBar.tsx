/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuSub,
} from "./ui/sidebar";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Projector,
  Plus,
  Shirt,
  LogOut,
  User2,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import avatar from "../../public/boy.png";
import Image from "next/image";
import { CollapsibleTrigger } from "./ui/collapsible";
import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import About from "./users/About";
import { usePathname } from "next/navigation";
import AddOrder from "./payments/AddOrder";
import UserEditForm from "./users/UserEditForm";
import AddUser from "./users/AddUser";
import AddCategory from "./products/AddCategory";
import AddProduct from "./products/AddProduct";
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const userName = "laoufi mohamed lamine";

const SideBar = () => {
  const [formName, setformName] = useState("");
  const realProducts: {
    title: string;
    component: React.ReactElement;
  }[] = [];
  const products = [
    ...realProducts,
    {
      title: "See All Products",
      component: (
        <Link href={"/products"}>
          <Shirt />
          See All Products
        </Link>
      ),
    },
    {
      title: "Add Products",
      component: (
        <SheetTrigger
          onClick={() => {
            setformName("product");
          }}
        >
          <Plus />
          Add Products
        </SheetTrigger>
      ),
    },
    {
      title: "Add Category",
      component: (
        <SheetTrigger
          onClick={() => {
            setformName("category");
          }}
        >
          <Plus />
          Add Category
        </SheetTrigger>
      ),
    },
  ];
  const realUsers: { title: string; component: React.ReactElement }[] = [];
  const users = [
    ...realUsers,
    {
      title: "See All Users",
      component: (
        <Link href={"/users"}>
          <User2 />
          See All Users
        </Link>
      ),
    },
    {
      title: "Add User",
      component: (
        <SheetTrigger
          onClick={() => {
            setformName("user");
          }}
        >
          <Plus />
          Add User
        </SheetTrigger>
      ),
    },
  ];
  const realPayments: { title: string; component: React.ReactElement }[] = [];
  const payments = [
    ...realPayments,
    {
      title: "See All Transactions",
      component: (
        <Link href={"/payments"}>
          <DollarSign />
          See All Transactions
        </Link>
      ),
    },
    {
      title: "Add Transaction Order",
      component: (
        <SheetTrigger
          onClick={() => {
            setformName("payment");
          }}
        >
          <Plus />
          Add Transaction Order
        </SheetTrigger>
      ),
    },
  ];
  return (
    <Sheet>
      {formName === "payment" ? (
        <AddOrder key={"payment"} />
      ) : formName === "user" ? (
        <AddUser key={"user"} />
      ) : formName === "category" ? (
        <AddCategory />
      ) : formName === "product" ? (
        <AddProduct />
      ) : (
        ""
      )}
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/profile"}>
                <Image
                  src={avatar}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full w-6 h-6"
                />
                <span>{userName}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarHeader>
        <p className="h-px w-f bg-primary/10 mx-2"></p>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
          {/* ********** */}
          <SidebarGroup>
            <SidebarGroupLabel>Products</SidebarGroupLabel>

            {products.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>{item.component}</SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
          {/* ********** */}
          <SidebarGroup>
            <SidebarGroupLabel>Users</SidebarGroupLabel>

            {users.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>{item.component}</SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
          {/* ********** */}
          {/* ********** */}
          <SidebarGroup>
            <SidebarGroupLabel>Transaction/Payments</SidebarGroupLabel>

            {payments.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>{item.component}</SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <p className="bg-primary/10 p-px"></p>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/logout"}>
                <LogOut />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarFooter>
      </Sidebar>
    </Sheet>
  );
};

export default SideBar;
