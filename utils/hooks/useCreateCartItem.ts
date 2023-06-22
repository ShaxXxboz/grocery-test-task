import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCartItem } from "../api";
import { GET_CART_ITEMS_KEY } from "./useCartItems";

export const useCreateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation(createCartItem, {
    onSuccess: () => queryClient.invalidateQueries([GET_CART_ITEMS_KEY]),
  });
};
