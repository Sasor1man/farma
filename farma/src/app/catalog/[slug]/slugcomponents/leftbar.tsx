"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { FunctionComponent, useRef, useState } from "react";
import * as React from "react";

interface LeftBarProps {
  brandFiltered: string[];
}

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

const saveArray = (arr: string[]) => {
  const forSave = JSON.stringify(arr);
  localStorage.setItem('brandArr', forSave)
}

const LeftBar: FunctionComponent<LeftBarProps> = ({
  brandFiltered,
}) => {
  const [priceMin, setPriceMin] = useState("0");
  const [priceMax, setPriceMax] = useState("0");
  const [brandArr, setBrandArr] = useState<string[]>([]);
  const [availability, setAvailability] = useState('available')
  const formRef = useRef<HTMLFormElement>(null)
  const searchParams = useSearchParams();
  const router = useRouter()

  React.useEffect(() => {


    const min = localStorage.getItem("lowPrice") || "0";
    const max = localStorage.getItem("highPrice") || "0";

    const brandsFromLocal = localStorage.getItem('brandArr');
    if (brandsFromLocal) {
      const brands = JSON.parse(brandsFromLocal) as string[];
      setBrandArr(brands)
    } else setBrandArr([] as string[])

    setPriceMin(min);
    setPriceMax(max);

    const availability: string | null = localStorage.getItem('availability')
    if (availability) setAvailability(availability)


  }, []);

  React.useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('availability', availability)
    params.set('minprice', priceMin)
    params.set('maxprice', priceMax)

    const brands = brandArr.join(',')
    params.set('brands', brands)


    router.push(`?${params}`)
  }, [availability, brandArr, priceMax, priceMin, router, searchParams])
  // const submit = () => {
  //   // const form = formRef.current as HTMLFormElement
  //   // form.requestSubmit();    

  //   console.log(searchParams)
  // };

  const checkedCheck = (brand: string) => brandArr.includes(brand);

  const handleChange = (brand: string) => {
    setBrandArr(prev => {
      const newBrandArr = prev.includes(brand) ? prev.filter(e => e !== brand) : [...prev, brand]
      saveArray(newBrandArr)
      // submit()
      return newBrandArr
    })

  }

  const submitNum = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    const value = zeroValidate(input.value);
    input.value = value
    const params = new URLSearchParams(searchParams.toString())
    console.log(params)


    if (input.id === "low-price") {
      setPriceMin(value);
      localStorage.setItem("lowPrice", value);

    } else {
      setPriceMax(value);
      localStorage.setItem("highPrice", value);
    }

    // submit();
  };

  const numKeyValidate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["-", "+", ".", "e"].includes(e.key)) e.preventDefault();
  };

  const saveRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAvailability(value)
    localStorage.setItem('availability', value)
  }



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
