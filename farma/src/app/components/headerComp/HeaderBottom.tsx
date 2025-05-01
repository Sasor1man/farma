import * as React from "react";
import { Component } from "react";
import Image from "next/image";
import CompImg from "../../imgs/header/image 1.png";
import * as Svgs from "../../imgs/header/Svgs";

const headerClassRight = () => `flex items-center justify-between`;

interface HeaderBottomProps {}

interface HeaderBottomState {}

class HeaderBottom extends React.Component<
  HeaderBottomProps,
  HeaderBottomState
> {
  state = {};
  render() {
    return (
      <div className="h-[58] flex justify-between items-center headerBottom">
        <Image src={CompImg} alt="" width={119} height={58} />
        <button className="w-[110px] h-[41px] btn">Каталог</button>
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
          <div className={headerClassRight()}>
            <Svgs.default.BusketSvg />
            <span>0</span>
          </div>
          <div className={headerClassRight()}>
            <Svgs.default.LikeSvg />
            <span>0</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBottom;
