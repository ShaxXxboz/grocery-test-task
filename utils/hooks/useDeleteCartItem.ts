import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem } from "../api";
import { GET_CART_ITEMS_KEY } from "./useCartItems";

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCartItem, {
    onSuccess: () => queryClient.invalidateQueries([GET_CART_ITEMS_KEY]),
  });
};
