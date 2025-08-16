"use client";

import * as React from 'react';
import { categories } from "@/app/components/general/categorytranslate";
import { CategorySlug } from "@/app/components/general/categorytranslate";
import MainLink from "@/app/components/general/mainlink";
import Svgs from "../../../../public/imgs/header/Svgs";
import LeftBar from "./slugcomponents/leftbar";
import CategoryWrapper from "./slugcomponents/categorywrapper";
import { use, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page({
  params,
}: {
  params: Promise<{ slug: CategorySlug }>;
}) {
  const { slug } = use(params);

  const [brands, setBrands] = useState<string[]>([])
  const [priceMin, setPriceMin] = useState("0");
  const [priceMax, setPriceMax] = useState("0");
  const [brandArr, setBrandArr] = useState<string[]>([]);
  const [availability, setAvailability] = useState('available')
  const [productArr, setProducts] = useState([])

  const searchParams = useSearchParams();
  const router = useRouter()

  useEffect(() => {

    const params = new URLSearchParams(searchParams.toString())

    const minPrice = params.get('minprice')
    const maxPrice = params.get('maxprice')
    const availability = params.get('availability')
    const brands = params.get('brands')?.split(',')
    const filters = {
      category: slug,
      minPrice,
      maxPrice,
      availability,
      brands
    }

    async function getProducts() {
      const res = await fetch('/api/filters', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({filters})
      })
      const products = await res.json()
      setProducts(products)
    }
    getProducts()
  }, [searchParams, slug])

  useEffect(() => {
    async function fetchBrands() {

      const res = await fetch("/api", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setBrands(data);
    }
    fetchBrands();
  }, []);

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

    if (brandArr.length > 0 ){
      const brands = brandArr.join(',')
      params.set('brands', brands)
    } else {
      if (params.has('brands')) {
        params.delete('brands')
      }
    }


    router.push(`?${params}`)
  }, [availability, brandArr, priceMax, priceMin, router, searchParams])




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

  const handleChange = (brand: string) => {
    setBrandArr(prev => {
      const newBrandArr = prev.includes(brand) ? prev.filter(e => e !== brand) : [...prev, brand]
      saveArray(newBrandArr)
      return newBrandArr
    })

  }

  const submitNum = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    const value = zeroValidate(input.value);
    input.value = value

    if (input.id === "low-price") {
      setPriceMin(value);
      localStorage.setItem("lowPrice", value);

    } else {
      setPriceMax(value);
      localStorage.setItem("highPrice", value);
    }

  };

  const saveRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAvailability(value)
    localStorage.setItem('availability', value)
  }

  return (
    <div>
      <MainLink />
      <div className="arrow-link mb-[60px]">
        <h2>{categories[slug]}</h2>
        <Svgs.ArrowSvg />
      </div>
      <div className="flex justify-between">
        <LeftBar brandFiltered={brands} setPriceMin={setPriceMin} setPriceMax={setPriceMax} saveRadio={(e: React.ChangeEvent<HTMLInputElement>) => saveRadio(e)} handleChange={(brand: string) => handleChange(brand)} submitNum={(e: React.FocusEvent<HTMLInputElement>) => submitNum(e)} priceMin={priceMin} priceMax={priceMax} brandArr={brandArr} availability={availability} />
        <CategoryWrapper products={productArr} />
      </div>
    </div>
  );
}
