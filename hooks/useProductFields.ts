import { useMemo } from "react";

export function useProductFields() {
  return useMemo(
    () => ({
      name: "",
      sku: "",
      price: 0,
      stock: 0,
    }),
    []
  );
}

