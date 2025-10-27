"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";

const AddOrder = () => {
  const close = useRef<HTMLButtonElement | null>(null);
  const initValue = { amount: 0, "user ID": "", status: "pending" };
  const formSchema = zod.object({
    amount: zod.coerce.number().positive("Amount must be greater than 0"),
    "user ID": zod.string(),
    status: zod.enum(["pending", "processing", "success", "failed"]),
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
        <SheetTitle>Add Order</SheetTitle>
      </SheetHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleChange)}
          className="space-y-8 p-3 flex flex-col gap-4 overflow-auto h-full"
        >
          {Object.entries(initValue).map((info, index) => (
            <FormField
              key={index + ""}
              control={form.control}
              name={info[0] as any}
              render={({ field }) => (
                <FormItem className=" m-0">
                  <FormLabel className="capitalize">{info[0]}</FormLabel>
                  <FormControl>
                    {field.name === "status" ? (
                      <Select onValueChange={(value) => field.onChange(value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue
                            className="w-full"
                            placeholder="Select a status"
                          />
                        </SelectTrigger>
                        <SelectContent className="w-full px-2 ">
                          <SelectGroup
                            {...field}
                            className="flex flex-col gap-2"
                          >
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem
                              className="cursor-pointer"
                              value="pending"
                            >
                              Pending
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer"
                              value="processing"
                            >
                              Processing
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer"
                              value="success"
                            >
                              Success
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer"
                              value="failed"
                            >
                              Failed
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        type={field.name === "amount" ? "number" : "text"}
                        placeholder={`please enter oreder ${field.name}`}
                        {...field}
                      />
                    )}
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
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

export default AddOrder;
