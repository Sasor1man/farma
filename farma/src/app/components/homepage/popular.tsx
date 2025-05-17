import * as React from "react";
import Svgs from "../../../../public/imgs/header/Svgs";
import Image from "next/image";

const cards: { title: string; price: number; imgLink: string }[] = [
  {
    title: "Иглодержатель Криля-Вуда",
    price: 3200,
    imgLink: "/imgs/product-card__img.png",
  },
  {
    title: "Иглодержатель Криля-Вуда",
    price: 3200,
    imgLink: "/imgs/product-card__img.png",
  },
  {
    title: "Иглодержатель Криля-Вуда",
    price: 3200,
    imgLink: "/imgs/product-card__img.png",
  },
  {
    title: "Иглодержатель Криля-Вуда",
    price: 3200,
    imgLink: "/imgs/product-card__img.png",
  },
];

interface PopularProps {}

const Popular: React.FunctionComponent<PopularProps> = () => {
  return (
    <div className="mt-[114px] h-[542px] relative">
      <div className="arrow-link">
        <h2>Популярные товары</h2>
        <Svgs.ArrowSvg />
      </div>
      <div className="absolute bottom-0 flex gap-[24px]">
        {cards.map((e, i) => (
          <div
            className="flex flex-col border border-[#3333334D] rounded-xl h-[404px]"
            key={i}
          >
            <div className="p-[20px] border-b border-b-inherit">
              <Image src={e.imgLink} alt="" width={266} height={200} />
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
