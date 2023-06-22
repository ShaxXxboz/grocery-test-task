import React from "react";
import ReactQueryHydrate from "@/components/ReactQueryHydrate";
import { getCartItems, getGroceries } from "@/utils/api";
import { GET_CART_ITEMS_KEY } from "@/utils/hooks/useCartItems";
import { GET_GROCERY_ITEMS_KEY } from "@/utils/hooks/useGroceryItems";
import { dehydrate } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import Home from "@/components/Home";

const HomePage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([GET_GROCERY_ITEMS_KEY], getGroceries);
  await queryClient.prefetchQuery([GET_CART_ITEMS_KEY], getCartItems);
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <Home />
    </ReactQueryHydrate>
  );
};

export default HomePage;
