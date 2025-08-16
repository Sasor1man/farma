import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const { filters } = await request.json();

        const { minPrice, maxPrice, availability, brands = [], category } = filters

        const order = availability === 'available'

        const products = await prisma.products.findMany({
            where:
            {
                price: {
                    gte: Number(minPrice),
                    lte: Number(maxPrice)
                },
                brand: brands && brands.length > 0 ? { in: brands } : undefined,
                category: category || undefined,
                order: order || undefined
            },
        })

        return NextResponse.json(products)

    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}