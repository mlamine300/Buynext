"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
import { useRef } from "react";

const AddCategory = () => {
  const close = useRef<HTMLButtonElement | null>(null);
  const initValue = { name: "" };
  const formSchema = zod.object({
    name: zod
      .string()
      .min(3, "Category name must contain more then 3 characters")
      .max(35, "Category name must contain less then 35 characters"),
  });
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {},
  });

  const handleChange = (data: zod.infer<typeof formSchema>) => {
    if (close.current) close.current.click();
    alert(JSON.stringify(data));
  };
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Add Category</SheetTitle>
      </SheetHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleChange)}
          className="space-y-8 p-3 flex flex-col gap-4 overflow-auto h-full"
        >
          <FormField
            control={form.control}
            name={"name"}
            render={({ field }) => (
              <FormItem className=" m-0">
                <FormLabel className="capitalize">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`please enter Category ${field.name}`}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            // onClick={() => alert(form.getValues("amount"))}
            className="m-0 mt-auto "
            type="submit"
          >
            Submit
          </Button>
          <SheetClose className="m-0" ref={close} asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </form>
      </Form>
    </SheetContent>
  );
};

export default AddCategory;
