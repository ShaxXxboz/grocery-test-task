import { FC, memo } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Button from "@mui/material/Button";
import { GroceryItemProps } from "@/app/types";
import { useCartItems } from "@/utils/hooks/useCartItems";

const GroceryItem: FC<GroceryItemProps> = memo(
  ({ groceryItem, onAddToCart }) => {
    const { data: cartItems } = useCartItems();
    const bought = cartItems?.find(
      (cartItem) => cartItem.productId === groceryItem.id
    );

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 180, objectFit: "contain" }}
          component="img"
          image="/grocery-item.png"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              textDecoration: bought ? "line-through;" : "",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {groceryItem.title} {bought && <CheckBoxIcon color="success" />}
          </Typography>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            ${groceryItem.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => onAddToCart(groceryItem)}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    );
  }
);

export default GroceryItem;
