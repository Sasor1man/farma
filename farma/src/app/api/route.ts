import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

export async function GET(request: NextRequest) {
  try {

    const {filters} = request.json()

  }catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}