import Link from "next/link";
import * as React from "react";
import { Offers } from "@/types/offers";

const offerColorMap: { [key: string]: string } = {
  Имплантология: "F98C23",
  Хирургия: "AE8EB5",
  Пародонтология: "E74F4E",
  Ортопедия: "91B450",
  "Терапия и диагностика": "EFB434",
  Ортодонтия: "0090B5",
  "Расходные материалы": "8467CA",
};

interface Props {
  offers: Offers[];
}

const Offerlist: React.FunctionComponent<Props> = ({ offers }) => {
  return (
    <div className="gap-[24px] flex flex-wrap text-white relative mt-[150px]">
      {offers.map((e) => (
        <div
          key={e.id}
          className={`relative w-[306px] h-[493px] rounded-[10px] py-[35px] pl-[35px] pr-[25px] flex flex-col`}
          style={{ backgroundColor: `#${offerColorMap[e.title]}` }}
        >
          <h3 className="text-xl font-semibold">{e.title}</h3>
          <ul className="text-sm offerlist">
            {e.descriptionList?.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
          <Link
            className="btn btn-primary mt-auto h-[41px] w-[170px]"
            href={``}
          >
            {"Посмотреть все"}
          </Link>
        </div>
      ))}
      <div
        className={`relative w-[306px] h-[493px] rounded-[10px] py-[35px] pl-[35px] pr-[25px] flex flex-col bg-[#C39440]`}
      >
        <h3 className="text-xl font-semibold">Весь каталог</h3>
        <Link className="btn btn-primary mt-auto h-[41px] w-[170px]" href={``}>
          {"Посмотреть все"}
        </Link>
      </div>
    </div>
  );
};

export default Offerlist;
