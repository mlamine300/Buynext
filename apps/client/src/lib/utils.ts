import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function sanitizePhoneNumber(input: string): string {
  return input.replace(/[^0-9+\s\-()]/g, "").trim();
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const luhnCheck = (num: string) => {
  const digits = num.replace(/\D/g, "").split("").reverse().map(Number);
  const sum = digits.reduce((acc, digit, idx) => {
    if (idx % 2) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    return acc + digit;
  }, 0);
  return sum % 10 === 0;
};
