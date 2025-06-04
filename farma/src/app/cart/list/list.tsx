"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Product } from "@/types/productInterface";
import { RootState } from "@/app/store/store";

const List = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  console.log("items", items);
  const [products, setProducts] = useState<Product[]>([]);
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
  console.log("products", products);

  return (
    <div>
      {products.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
    </div>
  );
};

export default List;
