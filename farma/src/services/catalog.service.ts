import { brandList } from "@/components/general/brandlisy";
import { prisma } from "@/lib/prisma";
import { BrandList } from "@/types/brandlist";

export async function getBrands(): Promise<string[]> {
  const brands: BrandList[] =
    await prisma.$queryRaw`SELECT brand FROM "Products"`;

  const brandFiltered: string[] = brandList(brands);

  return brandFiltered
}