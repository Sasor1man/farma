"use client";

import { BrandFilter } from "@/store/slices/catalog/types";
import { RootState } from "@/store/store";
import { FunctionComponent, useRef, } from "react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import catalogSlice from '../../../../../store/slices/catalog/catalogSlice';

interface LeftBarProps {
  brands: string[]
}

const LeftBar: FunctionComponent<LeftBarProps> = ({
  brands
}) => {

  const filter = useSelector((state: RootState) => state.catalog.filter)

  const { availability, checkboxes, priceMax, priceMin } = filter

  const { _setFilter } = catalogSlice.actions

  const dispatch = useDispatch()

  const setFilter = (e: BrandFilter) => dispatch(_setFilter(e))

  const formRef = useRef<HTMLFormElement>(null)

  const checkedCheck = (brand: string) => checkboxes.includes(brand);

  const numKeyValidate = (value: string) => {
    if (!/^\d*$/.test(value)) return;
    return value === '' ? 0 : Number(value);
  };

  const updateBrand = (title: string) => {
    const newBrands = checkedCheck(title) ? checkboxes.filter(e => e !== title) : [...checkboxes, title]
    setFilter({
      ...filter,
      checkboxes: newBrands
    })
  }


  return (
    <div className="w-[306px]">
      <form className="category-form" ref={formRef}>
        <div>
          <h3>Бренды</h3>
          {brands.map((e) => (
            <div className="brand-input" key={e}>
              <input type="checkbox" id={e} name={e} checked={checkedCheck(e)} onChange={() => updateBrand(e)} />
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
              checked={availability}
              onChange={() => setFilter({
                ...filter,
                availability: true
              })}
            />
            <label htmlFor="avaible">В наличии</label>
          </div>
          <div className="brand-input">
            <input
              type="radio"
              name="have"
              id="order"
              value={`order`}
              checked={!availability}
              onChange={() => setFilter({
                ...filter,
                availability: false
              })} />
            <label htmlFor="order">Под заказ</label>
          </div>
        </div>
        <div id="num">
          <h3>Цена</h3>
          <div className="price-input">
            <label htmlFor="low-price">От</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              name="low-price"
              id="low-price"
              value={priceMin}
              onChange={(e) => {
                const num = numKeyValidate(e.target.value)
                if (num) setFilter({
                  ...filter,
                  priceMin: num
                });
              }}
              // onBlur={submitNum}
              // onKeyDown={numKeyValidate}
              placeholder="0"
            />
            <label htmlFor="high-price">До</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              name="high-price"
              id="high-price"
              value={priceMax}
              onChange={(e) => {
                const num = numKeyValidate(e.target.value)
                if (num) setFilter({
                  ...filter,
                  priceMax: num
                });
              }}
              // onBlur={submitNum}
              // onKeyDown={numKeyValidate}
              placeholder="10000"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeftBar;
