"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Product } from "@/types/productInterface";
import { CartItem } from "@/types/cartitem";
import { RootState } from "@/app/store/store";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/app/store/slices/cartSlice";

const List = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const [products, setProducts] = useState<Product[]>([]);
  const [renderArr, setReanderArr] = useState<Product[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      if (items.length === 0) {
        setProducts([]);
        return;
      }
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: items.map((item) => item.id) }),
      });
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [items]);

  useEffect(() => {
    const makeRenderArr = (_itemsArr: CartItem[], _productArr: Product[]) => {
      const productArr: Product[] = [..._productArr];
      const itemsArr: CartItem[] = [..._itemsArr];
      const renderArr: Product[] = [];

      itemsArr.forEach((e) => {
        for (let i = 0; i < e.quantity; i++) {
          const itemForPut = productArr.find((el) => el.id === e.id);
          if (itemForPut) renderArr.push(itemForPut);
        }
      });

      return renderArr;
    };
    setReanderArr(makeRenderArr(items, products));
  }, [items, products]);

  const deleteItem = (id: number) => {
    const item = items.find((e) => e.id === id);
    if (item) dispatch(removeFromCart(item));
  };

  return (
    <div className="flex flex-wrap gap-[20px] justify-center">
      {renderArr?.map((e, i) => (
        <div
          className="flex flex-col border border-[#3333334D] rounded-xl h-[404px] w-[306px]"
          key={i}
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
            <div className="flex justify-between">
              <button className="btn btn-primary w-[125px] h-[41px]">
                Посмотреть
              </button>
              <button
                className="btn btn-primary w-[100px] h-[41px]"
                onClick={() => deleteItem(e.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
