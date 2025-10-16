import * as React from 'react';
import { categories } from "@/components/general/categorytranslate";
import { CategorySlug } from "@/components/general/categorytranslate";
import MainLink from "@/components/general/mainlink";
import Svgs from "../../../../../public/imgs/header/Svgs";
import LeftBar from "./slugcomponents/leftbar";
// import CategoryWrapper from "./slugcomponents/categorywrapper";
import { getBrands } from '@/services/catalog.service';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: CategorySlug }>;
}) {

  const { slug } = await params

  const brands = await getBrands()

  return (
    <div>
      <MainLink />
      <div className="arrow-link mb-[60px]">
        <h2>{categories[slug]}</h2>
        <Svgs.ArrowSvg />
      </div>
      <div className="flex justify-between">
        <LeftBar brands={brands}/>
        {/* <CategoryWrapper products={productArr} /> */}
      </div>
    </div>
  );
}
