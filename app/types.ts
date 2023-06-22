export type GroceryItemType = {
  id: string;
  title: string;
  price: number;
};

export type CartItemType = {
  id: string;
  productId: string;
  quantity: number;
};

export type GroceryItemProps = {
  groceryItem: GroceryItemType;
  onAddToCart: (item: GroceryItemType) => void;
};

export type CartItemProps = {
  item: CartItemType;
};
