import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { BrandList } from "@/types/brandlist";
import { brandList } from "../components/general/brandlisy";

export async function POST(request: NextRequest) {
  try {
    const { ids } = await request.json();

    if (!Array.isArray(ids) || !ids.every((id) => typeof id === "number")) {
      return NextResponse.json({ error: "Invalid ids array" }, { status: 400 });
    }

    const products = await prisma.products.findMany({
      where: { id: { in: ids } },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}

export async function GET() {
  try {

    const brands: BrandList[] =
    await prisma.$queryRaw`SELECT brand FROM "Products"`;

    const brandFiltered: string[] = brandList(brands);

    return NextResponse.json(brandFiltered);

  }catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}