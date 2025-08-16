import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { filters } = await request.json();

     const productArr: Product[] =
    await prisma.$queryRaw`SELECT * FROM "Products" WHERE category = ${slug}`;

    return NextResponse.json(products);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}