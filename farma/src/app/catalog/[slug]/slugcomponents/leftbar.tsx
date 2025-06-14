"use client";

import { FunctionComponent } from "react";
import * as React from "react";
import { useState } from "react";

interface LeftBarProps {
  brandFiltered: string[];
  action: (formData: FormData) => void;
}

const submit = (form: HTMLFormElement) => {
  form.requestSubmit();
};

const zeroValidate = (value: string): string => {
  if (value === "") return "0";
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== "0") {
      value = value.slice(i);
      return value;
    }
  }
  return value;
};

const LeftBar: FunctionComponent<LeftBarProps> = ({
  brandFiltered,
  action,
}) => {
  const [priceMin, setPriceMin] = useState("0");
  const [priceMax, setPriceMax] = useState("0");

  React.useEffect(() => {
    const min = localStorage.getItem("lowPrice") || "0";
    const max = localStorage.getItem("highPrice") || "0";

    setPriceMin(min);
    setPriceMax(max);
  }, []);

  const submitOnClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.stopPropagation();
    const element = e.target as HTMLInputElement;

    if (["checkbox", "radio"].includes(element.type)) {
      submit(e.currentTarget);
    }
  };

  const submitNum = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    const value = zeroValidate(input.value);

    if (input.id === "low-price") {
      setPriceMin(value);
      localStorage.setItem("lowPrice", value);
    } else {
      setPriceMax(value);
      localStorage.setItem("highPrice", value);
    }

    const form = e.currentTarget.form as HTMLFormElement;
    submit(form);
  };

  const numKeyValidate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["-", "+", ".", "e"].includes(e.key)) e.preventDefault();
  };

  return (
    <div className="w-[306px]">
      <form className="category-form" action={action} onClick={submitOnClick}>
        <div>
          <h3>Бренды</h3>
          {brandFiltered.map((e) => (
            <div className="brand-input" key={e}>
              <input type="checkbox" id={e} name={e} />
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
              value={`avaible`}
              defaultChecked
            />
            <label htmlFor="avaible">В наличии</label>
          </div>
          <div className="brand-input">
            <input type="radio" name="have" id="order" value={`order`} />
            <label htmlFor="order">Под заказ</label>
          </div>
        </div>
        <div id="num">
          <h3>Цена</h3>
          <div className="price-input">
            <label htmlFor="price">От</label>
            <input
              type="number"
              name="price"
              id="low-price"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              onBlur={submitNum}
              onKeyDown={numKeyValidate}
            />
            <label htmlFor="price">До</label>
            <input
              type="number"
              name="price"
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
