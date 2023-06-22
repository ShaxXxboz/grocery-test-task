import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItem } from "../api";
import { GET_CART_ITEMS_KEY } from "./useCartItems";

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation(updateCartItem, {
    onSuccess: () => queryClient.invalidateQueries([GET_CART_ITEMS_KEY]),
  });
};
