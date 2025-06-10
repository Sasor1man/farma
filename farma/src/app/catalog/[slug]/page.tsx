import { categories } from "@/app/components/general/categorytranslate";
import { CategorySlug } from "@/app/components/general/categorytranslate";
import MainLink from "@/app/components/general/mainlink";
import Svgs from "../../../../public/imgs/header/Svgs";
import { prisma } from "@/lib/prisma";
import { brandList } from "@/app/components/general/brandlisy";
import { BrandList } from "@/types/brandlist";
import LeftBar from "./slugcomponents/leftbar";
import CategoryWrapper from "./slugcomponents/categorywrapper";
import { Product } from "@/types/productInterface";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: CategorySlug }>;
}) {
  const { slug } = await params;

  const brands: BrandList[] =
    await prisma.$queryRaw`SELECT brand FROM "Products"`;

  const brandFiltered: string[] = brandList(brands);

  const productArr: Product[] =
    await prisma.$queryRaw`SELECT * FROM "Products" WHERE category = ${slug}`;

  return (
    <div>
      <MainLink />
      <div className="arrow-link mb-[60px]">
        <h2>{categories[slug]}</h2>
        <Svgs.ArrowSvg />
      </div>
      <div className="flex justify-between">
        <LeftBar brandFiltered={brandFiltered} />
        <CategoryWrapper products={productArr} />
      </div>
    </div>
  );
}
