import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../api";

export const GET_CART_ITEMS_KEY = "cart-items";

export const useCartItems = () => {
  return useQuery({
    queryKey: [GET_CART_ITEMS_KEY],
    queryFn: () => getCartItems(),
  });
};
