import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartItemProps } from "@/app/types";
import { useGroceryItem } from "@/utils/hooks/useGroceryItem";
import { useUpdateCartItem } from "@/utils/hooks/useUpdateCartItem";
import { useDeleteCartItem } from "@/utils/hooks/useDeleteCartItem";

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { data: groceryItem, isLoading } = useGroceryItem(item.productId);
  const updateCartItemMutation = useUpdateCartItem();
  const deleteCartItemMutation = useDeleteCartItem();

  const onAddToQuantity = () => {
    updateCartItemMutation.mutate({
      ...item,
      quantity: item.quantity + 1,
    });
  };

  const onSubstractFromQuantity = () => {
    if (item.quantity > 1) {
      updateCartItemMutation.mutate({
        ...item,
        quantity: item.quantity - 1,
      });
    } else {
      deleteCartItemMutation.mutate(item);
    }
  };

  const onRemoveAllGroceryItemsInCart = () => {
    deleteCartItemMutation.mutate(item);
  };

  if (isLoading) {
    return "...Loading";
  }

  return (
    <Card>
      <CardContent sx={{ position: "relative" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ position: "relative" }}
        >
          {groceryItem?.title}
        </Typography>
        <Typography
          sx={{ position: "absolute", top: "1.2rem", right: "1.2rem" }}
        >
          ${(groceryItem?.price as number) * item.quantity}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "1rem",
        }}
      >
        <Typography sx={{ marginRight: "2rem" }}>Quantity:</Typography>
        <IconButton
          aria-label="remove"
          size="small"
          onClick={onSubstractFromQuantity}
        >
          <RemoveIcon fontSize="inherit" />
        </IconButton>
        <Typography sx={{ margin: "0 1rem 0 1rem" }}>
          {item.quantity}
        </Typography>
        <IconButton aria-label="add" size="small" onClick={onAddToQuantity}>
          <AddIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <CardActions>
        <Button
          startIcon={<DeleteIcon />}
          onClick={onRemoveAllGroceryItemsInCart}
        >
          Remove All
        </Button>{" "}
      </CardActions>
    </Card>
  );
};

export default CartItem;
