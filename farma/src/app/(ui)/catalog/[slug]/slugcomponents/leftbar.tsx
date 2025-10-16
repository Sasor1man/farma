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

  const numKeyValidate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["-", "+", ".", "e"].includes(e.key)) e.preventDefault();
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
              type="number"
              name="low-price"
              id="low-price"
              value={priceMin}
              onChange={(e) => setFilter({
                ...filter,
                priceMin: Number(e.target.value)
              })}
              // onBlur={submitNum}
              onKeyDown={numKeyValidate}
            />
            <label htmlFor="high-price">До</label>
            <input
              type="number"
              name="high-price"
              id="high-price"
              value={priceMax}
              onChange={(e) => setFilter({
                ...filter,
                priceMax: Number(e.target.value)
              })}
              // onBlur={submitNum}
              onKeyDown={numKeyValidate}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeftBar;
