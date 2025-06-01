import { categories } from "@/app/components/general/categorytranslate";
import { CategorySlug } from "@/app/components/general/categorytranslate";
import MainLink from "@/app/components/general/mainlink";
import Svgs from "../../../../public/imgs/header/Svgs";
import { prisma } from "@/lib/prisma";
import { brandList } from "@/app/components/general/brandlisy";
import { BrandList } from "@/types/brandlist";

const brands: BrandList[] =
  await prisma.$queryRaw`SELECT brand FROM "Products"`;

const brandFiltered: string[] = brandList(brands);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: CategorySlug }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <MainLink />
      <div className="arrow-link mb-[60px]">
        <h2>{categories[slug]}</h2>
        <Svgs.ArrowSvg />
      </div>
      <div className="flex justify-between">
        <div className="w-[306px]">
          <form className="category-form">
            <div>
              <h3>Бренды</h3>
              {brandFiltered.map((e) => (
                <div className="brand-input" key={e}>
                  <input type="checkbox" id={e} name={e} />
                  <label htmlFor={e}>{e}</label>
                </div>
              ))}
            </div>
            <div>
              <h3>Наличие</h3>
              <div className="brand-input">
                <input
                  type="radio"
                  name="have"
                  id="avaible"
                  value={`avaible`}
                />
                <label htmlFor="avaible">В наличии</label>
              </div>
              <div className="brand-input">
                <input type="radio" name="have" id="order" value={`order`} />
                <label htmlFor="order">Под заказ</label>
              </div>
            </div>
            <div>
              <h3>Цена</h3>
              <div className="price-input">
                <label htmlFor="price">От</label>
                <input type="number" name="price" id="low-price" />
                <label htmlFor="price">До</label>
                <input type="number" name="price" id="high-price" />
              </div>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
