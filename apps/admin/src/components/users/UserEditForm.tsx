/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ReactElement, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import AddUser from "./AddUser";

const UserEditForm = ({ initUser, setUser }: any) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit User</Button>
      </SheetTrigger>
      <AddUser initUser={initUser} setUser={setUser} />
    </Sheet>
  );
};

export default UserEditForm;
