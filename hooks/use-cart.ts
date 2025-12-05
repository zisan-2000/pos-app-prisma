import { useState } from "react";

type CartItem = {
  productId: string;
  quantity: number;
};

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  return {
    items,
    addItem(productId: string, quantity = 1) {
      setItems((prev) => [...prev, { productId, quantity }]);
    },
    clear() {
      setItems([]);
    },
  };
}

