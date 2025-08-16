"use client";

import { Product } from "@/types/productInterface";
import Image from "next/image";
import Pagination from "./pagination";
import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/slices/cartSlice";

interface CategoryWrapperProps {
  products: Product[];
}

const CategoryWrapper: FunctionComponent<CategoryWrapperProps> = ({
  products,
}) => {
  const [prodDivided, setProdDivided] = useState<Product[][]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  const divideProducts = (numOfPages: number, productsArr: Product[]) => {
    const emptyArr: Product[][] = [];
    const prodArr: Product[] = JSON.parse(JSON.stringify(productsArr));
    for (let i = 0; i < numOfPages; i++) {
      const start = i * 12;
      const end = start + 12;
      emptyArr.push(prodArr.slice(start, end));
    }
    setProdDivided(emptyArr);
  };

  useEffect(() => {
    const pageNum = Math.ceil(products.length / 12);

    divideProducts(pageNum, products);
  }, [products]);

  const handleAdd = (id: number) => {
    dispatch(addToCart({ id, quantity: 1 }));
  };

  return (
    <div className="w-[966px] flex-column align-center justify-between">
      <div className=" gap-[20px] flex flex-wrap ">
        {prodDivided[currentPage]?.map((e) => (
          <div
            className="flex flex-col border border-[#3333334D] rounded-xl h-[404px] w-[306px]"
            key={e.id}
          >
            <div className="p-[20px] border-b border-b-inherit">
              <Image
                src="/imgs/product-card__img.png"
                alt=""
                width={266}
                height={200}
              />
            </div>
            <div className="p-[20px] flex flex-col justify-between flex-1">
              <p className="h-[21px] font-extrabold text-sm">{e.title}</p>
              <p className="h-[32px] text-xl font-extrabold">{e.price} P</p>
              <button
                className="btn btn-primary w-[125px] h-[41px]"
                onClick={() => handleAdd(e.id)}
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        number={Math.ceil(products.length / 12)}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CategoryWrapper;
