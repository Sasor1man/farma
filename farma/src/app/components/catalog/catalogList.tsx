import * as React from "react";
import { Offers } from "@/types/offers";
import Image from "next/image";

interface CatalogListProps {
  offers: Offers[];
}

const CatalogList: React.FunctionComponent<CatalogListProps> = ({ offers }) => {
  return (
    <div className="flex gap-[24px] flex-wrap place-content-center">
      {offers.map((e) => (
        <div
          className="flex flex-col border border-[#3333334D] rounded-xl h-[404px] w-[306px]"
          key={e.id}
        >
          <div className="p-[20px]">
            <Image
              src="/imgs/product-card__img.png"
              alt=""
              width={266}
              height={200}
            />
          </div>
          <div className="p-[20px] flex flex-col justify-between flex-1">
            <p className="h-[21px] font-extrabold text-base">{e.title}</p>
            <button className="btn btn-primary mt-auto h-[41px] w-[170px]">
              Посмотреть все
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogList;
