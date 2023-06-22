import { useQuery } from "@tanstack/react-query";
import { getGroceries } from "../api";
import { CartItemType } from "@/app/types";

export const GET_GROCERY_ITEMS_KEY = "groceries";

export const useGroceryItems = (cartItems?: CartItemType[]) => {
  const productIdsInCart = cartItems?.map((cartItem) => cartItem.productId);
  return useQuery({
    queryKey: [GET_GROCERY_ITEMS_KEY],
    queryFn: () => getGroceries(),
    select: cartItems
      ? (groceryItems) =>
          groceryItems.filter((groceryItem) =>
            productIdsInCart?.includes(groceryItem.id)
          )
      : undefined,
  });
};
