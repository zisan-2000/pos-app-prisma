import { useState } from "react";

export function useCurrentShop() {
  const [shopId, setShopId] = useState<string | null>(null);
  return { shopId, setShopId };
}

