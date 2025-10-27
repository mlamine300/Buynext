import React, { useRef } from "react";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const AddUser = ({ initUser, setUser }: any) => {
  if (!initUser) {
    initUser = {
      "Full Name": "",
      email: "",
      // normalized to digits only to satisfy the form regex (10-15 digits)
      phone: "",
      address: "",
      city: "",

      "joined on": "",
    };
  }
  const close = useRef<HTMLButtonElement | null>(null);

  const formSchema = zod.object({
    "Full Name": zod
      .string()
      .min(3, "Name must be at least 3 characters.")
      .max(35, "Name must be at most 35 characters."),
    email: zod.email(),
    phone: zod
      .string()
      .regex(/^\d{10,15}$/, "Phone number must contain 10–15 digits"),
    address: zod
      .string()
      .min(3, "Address must be at least 3 characters.")
      .max(100, "Address must be at most 100 characters."),
    city: zod
      .string()
      .min(3, "city must be at least 3 characters.")
      .max(100, "city must be at most 100 characters."),
  });
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initUser,
  });

  const handleChange = (data: zod.infer<typeof formSchema>) => {
    if (close.current) close.current.click();
    setUser((user: any) => {
      return { ...data, "joined on": user["joined on"] };
    });

    // setX(1);
  };
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{initUser.email ? "Edit User" : "Add User"}</SheetTitle>
      </SheetHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleChange)}
          className="space-y-8 p-3 flex flex-col gap-4 overflow-auto h-full"
        >
          {Object.entries(initUser).map((info, index) => (
            <FormField
              key={index + ""}
              control={form.control}
              name={info[0] as any}
              render={({ field }) => (
                <FormItem className=" m-0">
                  <FormLabel className="capitalize">{info[0]}</FormLabel>
                  <FormControl>
                    <Input placeholder="...." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            //   onClick={() =>
            //     handleChange({
            //       username: "qddqs",
            //       email: "eazeazeaz",
            //       phone: "fdfsd",
            //       location: "ghjkldsqdq",
            //       role: "Admin",
            //     })
            //   }
            className="m-0 mt-auto "
            type="submit"
          >
            {initUser.email ? "Save changes" : "Submit"}
          </Button>
          <SheetClose className="m-0" ref={close} asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </form>
      </Form>
    </SheetContent>
  );
};

export default AddUser;
