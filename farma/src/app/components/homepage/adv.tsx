import * as React from "react";
import Svgs from "../../../../public/imgs/header/Svgs";
import Image from "next/image";
import Brands from "../../../../public/imgs/header/brands__inner-wrapper.png";

interface AdvProps {}

const Adv: React.FunctionComponent<AdvProps> = () => {
  return (
    <div className="h-[324px] flex mt-[120px] justify-between">
      <div className="w-[306px]">
        <div className="arrow-link">
          <h2>Все бренды</h2>
          <Svgs.ArrowSvg />
        </div>
      </div>
      <Image src={Brands} alt="" />
    </div>
  );
};

export default Adv;
