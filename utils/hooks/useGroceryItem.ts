import { useQuery } from "@tanstack/react-query";
import { getGroceryItem } from "../api";

export const GET_GROCERY_ITEM_KEY = "grocery";

export const useGroceryItem = (id: string) => {
  return useQuery({
    queryKey: [GET_GROCERY_ITEM_KEY, id],
    queryFn: () => getGroceryItem(id),
  });
};
