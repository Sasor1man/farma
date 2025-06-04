"use client";

import { Provider } from "react-redux";
import { store } from "./store";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@/app/store/slices/cartSlice";
import { RootState } from "../store/store";
import { CartItem } from "@/types/cartitem";

const CartStorage = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart) as CartItem[];
        dispatch(setCart(parsed));
      } catch (error) {
        console.error("Ошибка при чтении корзины из localStorage:", error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  return <>{children}</>;
};

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CartStorage>{children}</CartStorage>
    </Provider>
  );
}
