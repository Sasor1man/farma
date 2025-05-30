import Image from "next/image";
import Slider from "../../../../public/imgs/slider__img.png";
import { FunctionComponent } from "react";
import Link from "next/link";

const Main: FunctionComponent = () => {
  return (
    <main className="bg-radial from-[#AAADB2] to-[#C8C9CB] h-[500px] relative flex items-center">
      <div className="w-[429px] h-[324px] text-[#F5F6F6] absolute left-[100px]">
        <h3 className="h-[96px] text-3xl font-semibold">
          Ut viverra viverra phasellus id in eleifend.
        </h3>
        <ul className="mt-[30px] bg-testred">
          <li>Ut viverra viverra phasellus id in eleifend.</li>
          <li>Ut viverra viverra phasellus id in eleifend.</li>
          <li>Ut viverra viverra phasellus id in eleifend.</li>
        </ul>
        <Link
          href={"catalog"}
          className="mt-[45px] btn btn-primary w-[120px] h-[51px]"
        >
          Каталог
        </Link>
      </div>
      <div className=" absolute right-[72px]">
        <Image src={Slider} alt="" width={556} height={500} />
      </div>
    </main>
  );
};

export default Main;
