"use client";

import { FunctionComponent, useRef,} from "react";
import * as React from "react";

interface LeftBarProps {
  brandFiltered: string[];
  brandArr: string[]
  priceMin: string
  priceMax: string
  availability: string

  handleChange: (brand:string) => void
  submitNum: (e: React.FocusEvent<HTMLInputElement>) => void
  saveRadio: (e: React.ChangeEvent<HTMLInputElement>) => void
  setPriceMin: React.Dispatch<React.SetStateAction<string>>
  setPriceMax: React.Dispatch<React.SetStateAction<string>>
}

const LeftBar: FunctionComponent<LeftBarProps> = ({
  brandFiltered, priceMin, priceMax, brandArr, availability, handleChange, submitNum, saveRadio, setPriceMax, setPriceMin
}) => {
  const formRef = useRef<HTMLFormElement>(null)

  const checkedCheck = (brand: string) => brandArr.includes(brand);

  const numKeyValidate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["-", "+", ".", "e"].includes(e.key)) e.preventDefault();
  };

  return (
    <div className="w-[306px]">
      <form className="category-form" ref={formRef}>
        <div>
          <h3>Бренды</h3>
          {brandFiltered.map((e) => (
            <div className="brand-input" key={e}>
              <input type="checkbox" id={e} name={e} checked={checkedCheck(e)} onChange={() => handleChange(e)} />
              <label htmlFor={e}>{e}</label>
            </div>
          ))}
        </div>
        <div>
          <h3>Наличие</h3>
          <div className="brand-input">
            <input
              type="radio"
              name="have"
              id="avaible"
              value={`available`}
              checked={availability === `available`}
              onChange={(e) => saveRadio(e)}
            />
            <label htmlFor="avaible">В наличии</label>
          </div>
          <div className="brand-input">
            <input type="radio" name="have" id="order" value={`order`} checked={availability === `order`} onChange={e => saveRadio(e)} />
            <label htmlFor="order">Под заказ</label>
          </div>
        </div>
        <div id="num">
          <h3>Цена</h3>
          <div className="price-input">
            <label htmlFor="low-price">От</label>
            <input
              type="number"
              name="low-price"
              id="low-price"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              onBlur={submitNum}
              onKeyDown={numKeyValidate}
            />
            <label htmlFor="high-price">До</label>
            <input
              type="number"
              name="high-price"
              id="high-price"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              onBlur={submitNum}
              onKeyDown={numKeyValidate}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeftBar;
