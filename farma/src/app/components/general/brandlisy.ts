import { BrandList } from "@/types/brandlist";
import { fileURLToPath } from "url";

export const brandList = (brandList: BrandList[]): string[] => {
  const arr: string[] = [];
  brandList.forEach((e) => arr.push(e.brand));
  const filtered = Array.from(new Set(arr));
  return filtered;
};
