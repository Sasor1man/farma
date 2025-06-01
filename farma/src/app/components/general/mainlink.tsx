import Link from "next/link";
import { FunctionComponent } from "react";
import Svgs from "../../../../public/imgs/header/Svgs";

const MainLink: FunctionComponent = () => {
  return (
    <div className="catalog-link h-[101px] w-[223px] flex justify-between items-center text-sm">
      <span>
        <Link href={"/"}>Главная</Link>
      </span>
      <Svgs.RectangleSVG />
      <span>Каталог товаров</span>
    </div>
  );
};

export default MainLink;
