import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { useCartItems } from "@/utils/hooks/useCartItems";

const Header = () => {
  const { data: cartItems } = useCartItems();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Typography variant="h6" component="div">
                Groceries
              </Typography>
            </Link>
          </Box>
          <Link href="/cart">
            <IconButton aria-label="cart">
              <Badge badgeContent={cartItems?.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
