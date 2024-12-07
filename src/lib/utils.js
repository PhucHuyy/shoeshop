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

const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}
