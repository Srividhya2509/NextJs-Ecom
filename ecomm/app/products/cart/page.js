"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Box, Typography, Button, Drawer } from "@mui/material";
import { clearCart, selectCartItems } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const [open, setOpen] = useState("true");
  const [storedCartItems, setStoredCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedItems) {
      setStoredCartItems(storedItems);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ display: "flex", justifyContent: "center", margin: "5rem" }}>
          {storedCartItems.length === 0 ? (
            <Typography variant="h5">Your cart is empty</Typography>
          ) : (
            storedCartItems.map((item) => (
              <div key={item.id}>
                <Box sx={{display:'flex'}}>
                  <Typography variant="h5">
                    {item.title}- ₹{item.totalPrice}
                  </Typography>
                  <Button onClick={() => dispatch(clearCart())}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </Button>
                </Box>
              </div>
            ))
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default Cart;
