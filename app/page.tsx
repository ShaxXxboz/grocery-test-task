"use client";

import GroceryItem from "@/components/GroceryItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { GroceryItemType } from "./types";
import { useGroceryItems } from "@/utils/hooks/useGroceryItems";
import { useCartItems } from "@/utils/hooks/useCartItems";
import { useCreateCartItem } from "@/utils/hooks/useCreateCartItem";
import { useUpdateCartItem } from "@/utils/hooks/useUpdateCartItem";
import { useCallback } from "react";

const Home = () => {
  const { data: groceries, isLoading: isGroceriesLoading } = useGroceryItems();
  const { data: cartItems } = useCartItems();

  const createCartItemMutation = useCreateCartItem();
  const updateCartItemMutation = useUpdateCartItem();

  const onAddToCart = useCallback(
    (groceryItem: GroceryItemType) => {
      const productInCart = cartItems?.find(
        (cartItem) => cartItem.productId == groceryItem.id
      );

      if (productInCart) {
        updateCartItemMutation.mutate({
          ...productInCart,
          quantity: productInCart.quantity + 1,
        });
      } else {
        createCartItemMutation.mutate(groceryItem);
      }
    },
    [cartItems]
  );

  if (isGroceriesLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, marginBottom: "2rem" }}
      >
        Top selling
      </Typography>
      <Grid container spacing={2}>
        {groceries?.map((item: GroceryItemType) => (
          <Grid md={3} key={item.id}>
            <GroceryItem groceryItem={item} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
