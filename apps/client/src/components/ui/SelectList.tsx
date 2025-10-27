/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { twMerge } from "tailwind-merge";
interface SelectProps {
  title?: string;
  list: string[];
  value: string;
  onValueChange: any;
  className?: string;
  size?: "sm" | "default" | undefined;
}
export function SelectList({
  title,
  list,
  value,
  onValueChange,
  className,
  size,
}: SelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={twMerge("w-20 cursor-pointer", className)}
        size={size || "default"}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {title && <SelectLabel>{title}</SelectLabel>}
          {list.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}{" "}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
