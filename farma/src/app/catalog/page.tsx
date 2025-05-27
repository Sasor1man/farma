import Link from "next/link";
import Svgs from "../../../public/imgs/header/Svgs";
import { Offers } from "@/types/offers";
import CatalogList from "../components/catalog/catalogList";
import { prisma } from "@/lib/prisma";

const offers: Offers[] = await prisma.$queryRaw`
  SELECT * FROM "Catalog"`;

export default function Catalog() {
  return (
    <div>
      <div className="catalog-link h-[101px] w-[223px] flex justify-between items-center text-sm">
        <span>
          <Link href={"/"}>Главная</Link>
        </span>
        <Svgs.RectangleSVG />
        <span>Каталог товаров</span>
      </div>
      <div className="arrow-link mb-[60px]">
        <h2>Каталог товаров</h2>
        <Svgs.ArrowSvg />
      </div>
      <CatalogList offers={offers} />
    </div>
  );
}
