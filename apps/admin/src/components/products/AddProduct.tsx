import React, { useRef, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";

const Category: string[] = [
  "T-shirts",
  "Shoes",
  "Accessories",
  "Bags",
  "Dresses",
  "Jackets",
  "Gloves",
  "Hoodies",
  "Pants",
  "Hats",
] as const;

const Sizes: string[] = ["XS", "S", "M", "L", "XL", "XXL", "3XL"] as const;

const Colors: string[] = [
  "black",
  "White",
  "Gray",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Beige",
  "Navy",
] as const;

const AddProduct = () => {
  const [refresh, setRefresh] = useState(0);
  const initValue = {
    name: "",
    "short Description": "",
    // normalized to digits only to satisfy the form regex (10-15 digits)
    description: "",
    price: 5,
    category: "",
    sizes: [],
    colors: [],
    images: {},
  };

  const close = useRef<HTMLButtonElement | null>(null);

  const formSchema = zod.object({
    name: zod
      .string()
      .min(3, "Name must have more then 3 character")
      .max(35, "Name must have less then 35 character"),
    "short Description": zod.string(),
    description: zod.string(),
    price: zod.coerce.number().positive("Price should be greater then 0"),
    category: zod.enum(Category, { error: "Please select a category" }),
    sizes: zod.array(zod.enum(Sizes)).nonempty("Select at least one size"),
    colors: zod.array(zod.enum(Colors)).nonempty("Select at least one color"),
    images: zod.record(
      zod.enum(Colors),
      zod.string().min(1, "Image is required").optional()
    ),
  });

  const handleChange = (data: zod.infer<typeof formSchema>) => {
    if (close.current) close.current.click();
  };
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: initValue,
  });
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Add Product</SheetTitle>
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
                    {field.name === "category" ? (
                      <Select onValueChange={(value) => field.onChange(value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue
                            className="w-full"
                            placeholder="Select a Category"
                          />
                        </SelectTrigger>
                        <SelectContent className="w-full px-2 ">
                          <SelectGroup
                            {...field}
                            className="flex flex-col gap-2"
                          >
                            <SelectLabel>Category</SelectLabel>
                            {Category.map((cat) => (
                              <SelectItem
                                key={cat}
                                className="cursor-pointer capitalize"
                                value={cat}
                              >
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : field.name === "sizes" ? (
                      <div className="grid grid-cols-4 gap-y-2">
                        {Sizes.map((size, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1 text-sm font-semibold"
                          >
                            <Checkbox
                              id={size}
                              checked={field.value.includes(size)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, size]);
                                } else {
                                  field.onChange(
                                    field.value.filter(
                                      (f: string) => f !== size
                                    )
                                  );
                                }
                              }}
                            />
                            <Label htmlFor={size}>{size}</Label>
                          </div>
                        ))}
                      </div>
                    ) : field.name === "colors" ? (
                      <div className="grid grid-cols-3 gap-y-4">
                        {Colors.map((color, index) => (
                          <div key={index} className="flex items-center gap-2 ">
                            <Checkbox
                              id={color}
                              checked={field.value.includes(color)}
                              onCheckedChange={(checked) => {
                                setRefresh(Math.random());
                                if (checked) {
                                  field.onChange([...field.value, color]);
                                } else {
                                  field.onChange(
                                    field.value.filter(
                                      (f: string) => f !== color
                                    )
                                  );
                                }
                              }}
                            />
                            <p
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: color }}
                            ></p>
                            <Label className="text-xs" htmlFor={color}>
                              {color}
                            </Label>
                          </div>
                        ))}
                      </div>
                    ) : field.name === "images" ? (
                      <ScrollArea className="max-h-40  my-2">
                        <div className=" flex flex-col gap-3 my-2">
                          {form.getValues("colors").map((color, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <p className="text-sm font-semibold w-16">
                                {color}:{" "}
                              </p>
                              <Input
                                value={field.value[color] || ""}
                                onChange={(e) => {
                                  field.onChange({
                                    ...field.value,
                                    [color]: e.target.value,
                                  });
                                }}
                                placeholder={`image url for ${color}`}
                              />
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    ) : field.name === "description" ||
                      field.name === "short Description" ? (
                      <Textarea {...field} />
                    ) : (
                      <Input placeholder="" {...field} />
                    )}
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            onClick={() => console.log(Object.keys(form.getValues("images")))}
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

export default AddProduct;
