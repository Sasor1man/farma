import Link from "next/link";
import Svgs from "../../../public/imgs/header/Svgs";

export default function Catalog() {
  return (
    <div>
      <div className="catalog-link h-[101px] w-[223px] flex justify-between items-center text-sm">
        <span>
          <Link href={"/"}>Главная</Link>
        </span>
        <Svgs.RectangleSVG />
        <span>Каталог товаров</span>
      </div>
      <div className="arrow-link mb-[60px]">
        <h2>Каталог товаров</h2>
        <Svgs.ArrowSvg />
      </div>
    </div>
  );
}
