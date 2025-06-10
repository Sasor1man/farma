"use client";

import * as React from "react";
import Image from "next/image";
import CompImg from "../../../../public/imgs/header/image 1.png";
import * as Svgs from "../../../../public/imgs/header/Svgs";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { CartItem } from "@/types/cartitem";

const headerClassRight = () => `flex items-center justify-between`;
const itemsReduce = (itemArr: CartItem[]): number => {
  return itemArr.reduce((acc, cur) => acc + cur.quantity, 0);
};

const HeaderBottom = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="h-[58] flex justify-between items-center headerBottom">
      <Image src={CompImg} alt="" width={119} height={58} />
      <Link href={"/catalog"} className="w-[110px] h-[41px] btn btn-primary">
        Каталог
      </Link>
      <div className="w-[636px] h-[41px] flex">
        <input
          type="text"
          className="border border-solid outline-none rounded-l-[10px] border-black h-full w-[596px]"
          placeholder="Поиск по сайту"
        />
        <button className="h-full w-[41px] rounded-l-none bg-[#84C0EA] rounded-r-[10px] border-solid  border-[#84C0EA] flex items-center justify-center">
          <Svgs.default.LoopSvg />
        </button>
      </div>
      <div className="w-[125px] h-[30px] flex justify-between items-center">
        <Link href={`/cart`} className={headerClassRight()}>
          <Svgs.default.BusketSvg />
          <span>{itemsReduce(items)}</span>
        </Link>
        <div className={headerClassRight()}>
          <Svgs.default.LikeSvg />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
