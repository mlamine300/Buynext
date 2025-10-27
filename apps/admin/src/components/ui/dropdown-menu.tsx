"use client";
import React, {
  useContext,
  useState,
  createContext,
  useRef,
  useEffect,
} from "react";
import { twMerge } from "tailwind-merge";
interface DropDownContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const dropDownContext = createContext<DropDownContextProps | undefined>(
  undefined
);
const DropdownMenu = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  useEffect(() => {
    // alert(`open : ${open}`);
    console.log(`open : ${open}`);
  }, [open]);
  return (
    <dropDownContext.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef}>{children}</div>
    </dropDownContext.Provider>
  );
};
export const ButtonTrigger = ({
  children,
  className,
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) => {
  const { setOpen } = useDropDownContext();
  return (
    <div
      onClick={() => setOpen((op: boolean) => !op)}
      className={twMerge(" cursor-pointer", className)}
    >
      {children}
    </div>
  );
};
export const ContentMenu = ({
  children,
  className,
  position,
}: {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  position?: "top" | "bottom" | "right" | "left";
}) => {
  const { open } = useDropDownContext();
  const positionStyle =
    position === "left"
      ? "top-10 right-8"
      : position === "right"
      ? "top-10 left-8"
      : "top-10 -left-full";
  return (
    <div
      className={twMerge(
        "absolute z-50  bg-background p-2 rounded shadow border",
        positionStyle,
        className,
        open ? "flex" : "hidden"
      )}
    >
      {children}
    </div>
  );
};
export const ContentItem = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) => {
  const { setOpen } = useDropDownContext();

  return (
    <button
      {...props}
      className={twMerge("", className)}
      onClick={() => setOpen(false)}
    >
      {children}
    </button>
  );
};
export const useDropDownContext = () => {
  const context = useContext(dropDownContext);
  if (!context)
    throw new Error("Drop Down Context must be used within a DropdownMenu");
  return context;
};
export default DropdownMenu;
