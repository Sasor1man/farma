import Link from "next/link";
import * as React from "react";

const offerlistObj: { title: string; descrList: string[]; color: string }[] = [
  {
    title: `Имплантология`,
    color: "F98C23",
    descrList: [
      "Набор для фиксации костных блоков",
      "Биоматериалы",
      "Инструменты для работы с биоматериалами",
      "Ронжиры",
      "Костные мельницы",
      "Ножницы",
      "Чашки для костного материала",
    ],
  },
  {
    title: `Хирургия`,
    color: "AE8EB5",
    descrList: [
      "Элеваторы и люксаторы",
      "Периотомы",
      "Пинцеты",
      "Распаторы",
      "Иглодержатели",
      "Ножницы",
      "Лезвия и рукоятки для лезвий",
    ],
  },
  {
    title: `Пародонтология`,
    color: "E74F4E",
    descrList: ["Кюреты Грейси", "Скалеры", "Зонды пародонтологические"],
  },
  {
    title: `Ортопедия`,
    color: "91B450",
    descrList: [
      "Набор для снятия коронок",
      "Коронкосниматели",
      "Эмалевые ножи",
      "Зеркала для фотографирования",
      "Динамометрические ключи и отвертки",
      "Контрастеры",
    ],
  },
  {
    title: `Терапия и диагностика`,
    color: "EFB434",
    descrList: [
      "Зеркала, микрозеркала и рукоятки",
      "Щипцы для извлечения сломанных инструментов из каналов",
      "Инструменты для композитов",
      "Держатель файлов",
      "Пинцеты",
    ],
  },
  {
    title: `Ортодонтия`,
    color: "0090B5",
    descrList: [
      "Набор для фиксации костных блоков",
      "Биоматериалы",
      "Инструменты для работы с биоматериалами",
      "Ронжиры",
      "Костные мельницы",
      "Чашки для костного материала",
    ],
  },
  {
    title: `Расходные материалы`,
    color: "8467CA",
    descrList: [
      "Аспираторы, адаптеры",
      "Ирригационные системы",
      "Шовный материал",
      "Биоматериалы",
      "Стерильные комплекты для хирургии",
      "Лезвия для скальпелей",
    ],
  },
];

interface OfferlistProps {}

const Offerlist: React.FunctionComponent<OfferlistProps> = () => {
  return (
    <div className="gap-[24px] flex flex-wrap text-white relative mt-[150px]">
      {offerlistObj.map((e) => (
        <div
          key={e.title}
          className={`relative w-[306px] h-[493px] rounded-[10px] py-[35px] pl-[35px] pr-[25px] flex flex-col`}
          style={{ backgroundColor: `#${e.color}` }}
        >
          <h3 className="text-xl font-semibold">{e.title}</h3>
          <ul className="text-sm offerlist">
            {e.descrList.map((el) => (
              <li>{el}</li>
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
