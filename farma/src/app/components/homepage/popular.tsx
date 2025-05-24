import * as React from "react";
import Svgs from "../../../../public/imgs/header/Svgs";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

interface Product {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  brand?: string;
  order?: boolean;
}

const Popular: React.FunctionComponent = async () => {
  const products: Product[] = await prisma.$queryRaw`
    SELECT * FROM "Products"
    ORDER BY RANDOM()
    LIMIT 4
  `;

  return (
    <div className="mt-[114px] h-[542px] relative">
      <div className="arrow-link">
        <h2>Популярные товары</h2>
        <Svgs.ArrowSvg />
      </div>
      <div className="absolute bottom-0 flex gap-[24px]">
        {products.map((e) => (
          <div
            className="flex flex-col border border-[#3333334D] rounded-xl h-[404px] w-[306px]"
            key={e.id}
          >
            <div className="p-[20px] border-b border-b-inherit">
              <Image
                src="/imgs/product-card__img.png"
                alt=""
                width={266}
                height={200}
              />
            </div>
            <div className="p-[20px] flex flex-col justify-between flex-1">
              <p className="h-[21px] font-extrabold text-sm">{e.title}</p>
              <p className="h-[32px] text-xl font-extrabold">{e.price} P</p>
              <button className="btn btn-primary w-[125px] h-[41px]">
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
