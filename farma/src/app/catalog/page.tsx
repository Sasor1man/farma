import Svgs from "../../../public/imgs/header/Svgs";
import { Offers } from "@/types/offers";
import CatalogList from "../components/catalog/catalogList";
import { prisma } from "@/lib/prisma";
import MainLink from "../components/general/mainlink";

const offers: Offers[] = await prisma.$queryRaw`
  SELECT * FROM "Catalog"`;

export default function Catalog() {
  return (
    <div>
      <MainLink />
      <div className="arrow-link mb-[60px]">
        <h2>Каталог товаров</h2>
        <Svgs.ArrowSvg />
      </div>
      <CatalogList offers={offers} />
    </div>
  );
}
