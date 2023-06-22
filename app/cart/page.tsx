"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CartItem from "@/components/CartItem";
import { useCartItems } from "@/utils/hooks/useCartItems";
import { useGroceryItems } from "@/utils/hooks/useGroceryItems";

function Cart() {
  const { data: cartItems } = useCartItems();
  const { data: groceryItemInCart } = useGroceryItems(cartItems);

  const total = cartItems?.reduce((acc, curr) => {
    const product = groceryItemInCart?.find(
      (groceryItem) => groceryItem.id === curr.productId
    );
    if (product) {
      return acc + product.price * curr.quantity;
    } else {
      return acc;
    }
  }, 0);

  return (
    <Box>
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, marginBottom: "2rem" }}
      >
        Cart
      </Typography>
      <Grid container spacing={2}>
        {
          <Grid container md={8} spacing={2}>
            {cartItems?.length ? (
              cartItems.map((item) => (
                <Grid md={12} key={item.id}>
                  <CartItem item={item} />
                </Grid>
              ))
            ) : (
              <Grid md={12}>
                <Typography variant="h6">Cart is empty :(</Typography>
              </Grid>
            )}
          </Grid>
        }
        <Grid md={4} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Total: ${total || 0}
              </Typography>
              <Button variant="outlined">Checkout</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
