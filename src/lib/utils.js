import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function convertCurrency(amount) {
  let numberStr = amount.toString();
  let formattedNumber = numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${formattedNumber}đ`;
}
