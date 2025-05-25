import Main from "./components/homepage/main";
import Adv from "./components/homepage/adv";
import Offerlist from "./components/homepage/offerlist";
import Popular from "./components/homepage/popular";
import { prisma } from "@/lib/prisma";
import { Product } from "@/types/productInterface";
import { Offers } from "@/types/offers";

export default async function Home() {
  const products: Product[] = await prisma.$queryRaw`
      SELECT * FROM "Products"
      ORDER BY RANDOM()
      LIMIT 4
    `;

  const offers: Offers[] = await prisma.$queryRaw`
  SELECT * FROM "Catalog"`;

  const saveLocal = (item: string): void => {
    localStorage.setItem("offerlist", item);
  };

  return (
    <>
      <Main />
      <Adv />
      <Offerlist offers={offers} />
      <Popular products={products} />
    </>
  );
}
