import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};

export const timeStampToDateTime = (timestamp: number) => {
  const formatted = new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date(timestamp));
  return formatted;
};

export const dateTimeToTimestamp = (dateTime: string) => {
  const [time, date] = dateTime.split(" ");
  const [hours, minutes] = time.split(":").map(Number);
  const [day, month, year] = date.split("/").map(Number);
  const timestamp = new Date(year, month - 1, day, hours, minutes).getTime();
  if (isNaN(timestamp)) {
    console.error("Invalid date format");
    return -1;
  }
  return timestamp;
};
