import React from "react";
import ReactQueryHydrate from "@/components/ReactQueryHydrate";
import { getCartItems } from "@/utils/api";
import { GET_CART_ITEMS_KEY } from "@/utils/hooks/useCartItems";
import { dehydrate } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import Cart from "@/components/Cart";

const CartPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([GET_CART_ITEMS_KEY], getCartItems);
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <Cart />
    </ReactQueryHydrate>
  );
};

export default CartPage;
