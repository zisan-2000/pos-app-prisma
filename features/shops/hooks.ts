import { useQuery } from "@tanstack/react-query";
import { shopsApi } from "./api";

export function useShops() {
  return useQuery({
    queryKey: ["shops"],
    queryFn: shopsApi.list,
  });
}

