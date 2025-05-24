import * as React from "react";
import Svgs from "../../../public/imgs/header/Svgs";
import Image from "next/image";
import CompImg from "../../../public/imgs/header/image 1.png";
import { FunctionComponent } from "react";

const gridFirst = () => `font-medium text-base leading-[150%]`;

const Footer: FunctionComponent = () => {
  return (
    <footer className="h-[643px] flex flex-col">
      <div className="h-[442px] border-t border-[#C9C9C9] border-b border-solid flex justify-between items-center mt-[120px]">
        <Image src={CompImg} alt="" width={195} height={96} />
        <div className="grid grid-cols-[196px_repeat(2,_306px)] grid-rows-[24px_repeat(10,_21px)] gap-x-[24px] gap-y-[15px] mr-[110px]">
          <div className={gridFirst()}>О компании</div>
          <div className={gridFirst()}>Популярные категории</div>
          <div className={gridFirst()}>Контакты</div>
          <div className="row-start-3">О компании</div>
          <div className="col-start-1 row-start-4">Новости</div>
          <div className="col-start-1 row-start-5">Контакты</div>
          <div className="col-start-1 row-start-6">Статьи</div>
          <div className="col-start-2 row-start-3">Имплантология</div>
          <div className="col-start-2 row-start-4">Хирургия</div>
          <div className="col-start-2 row-start-5">Пародонтология</div>
          <div className="col-start-2 row-start-6">Ортопедия</div>
          <div className="col-start-2 row-start-7">Терапия и диагностика</div>
          <div className="col-start-2 row-start-8">Ортодонтия</div>
          <div className="col-start-2 row-start-9">Расходные материалы</div>
          <div className="col-start-2 row-start-10">Оборудование</div>
          <div className="col-start-3 row-start-3">
            <Svgs.MapSvg />
            г. Москва, ул. Усачева, д. 62, стр. 1 офис 1
          </div>
          <div className="col-start-3 row-start-4">
            <Svgs.PhoneSvg />
            +7 (495) 933-6147
          </div>
          <div className="col-start-3 row-start-5">
            <Svgs.PhoneSvg /> +7 (495) 933-6147
          </div>
          <div className="col-start-3 row-start-6">
            <Svgs.MailSvg /> max@maximum.su
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-1 text-[#C9C9C9]">
        <div>2023 (с) Все права защищены</div>
        <div>Политика конфиденциальности</div>
      </div>
    </footer>
  );
};

export default Footer;
