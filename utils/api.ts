import { CartItemType, GroceryItemType } from "@/app/types";
import { nanoid } from "nanoid";

export const getGroceries = async () => {
  const response = await fetch(`http://localhost:3001/groceries`);
  const groceries = (await response.json()) as GroceryItemType[];
  return groceries;
};

export const getGroceryItem = async (id: string) => {
  const response = await fetch(`http://localhost:3001/groceries/${id}`);
  const groceryItem = (await response.json()) as GroceryItemType;
  return groceryItem;
};

export const getCartItems = async () => {
  const response = await fetch("http://localhost:3001/cart");
  const cartItems = (await response.json()) as CartItemType[];
  return cartItems;
};

export const createCartItem = async (product: GroceryItemType) => {
  const response = await fetch("http://localhost:3001/cart", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: nanoid(),
      productId: product.id,
      quantity: 1,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
};

export const updateCartItem = async (cartItem: CartItemType) => {
  const response = await fetch(`http://localhost:3001/cart/${cartItem.id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(cartItem),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
};

export const deleteCartItem = async (cartItem: CartItemType) => {
  const response = await fetch(`http://localhost:3001/cart/${cartItem.id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
};
