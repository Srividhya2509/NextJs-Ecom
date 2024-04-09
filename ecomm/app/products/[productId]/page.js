"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Typography, Grid, Button, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "@/app/components/Navbar";
import {
  incrementCount,
  decrementCount,
  selectCount,
} from "@/redux/slices/countSlice";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [showSpan, setShowSpan] = useState(false);
  const searchParams = useParams();
  const productId = searchParams.productId;
  const dispatch = useDispatch();
  const initialCount = useSelector(selectCount);
  console.log(initialCount);

  const handleIncrementClick = (product) => {
    dispatch(incrementCount());
    dispatch(addToCart(product));
  };

  const handleDecrementClick = (product) => {
    if (initialCount === 1) {
      dispatch(clearCart());
    } else {
      dispatch(decrementCount());
      dispatch(removeFromCart(product));
    }
  };

  useEffect(() => {
    const fetchProductDetails = async (productId) => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (productId) {
      fetchProductDetails(productId);
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: "5em" }}>
        <div style={{ textAlign: "center" }}>
          {" "}
          <Typography variant="h4" sx={{ color: "#c62828" }}>
            {product.title} - {product.brand}
          </Typography>
          <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={6} sm={12} key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
                style={{ borderRadius: "10px", margin: "1rem" }}
              />
              <Typography
                variant="h4"
                sx={{ fontSize: "20px", color: "#ef5350" }}
              >
                {product.description}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12} sx={{ height: "400" }}>
              <Typography
                variant="h6"
                sx={{ marginTop: "5rem", color: "#ef5350" }}
              >
                Price: ₹{product.price}
              </Typography>
              <Box sx={{ marginTop: "5rem" }}>
                <span className="buttonGroup">
                  <Button
                    onClick={() => handleDecrementClick(product)}
                    sx={{ background: "#c62828" }}
                  >
                    <Typography sx={{ color: "white" }}>-</Typography>
                  </Button>
                  <Typography variant="span" sx={{ padding: "20px" }}>
                    {initialCount}
                  </Typography>
                  <Button
                    onClick={() => handleIncrementClick(product)}
                    sx={{ background: "#c62828" }}
                  >
                    <Typography sx={{ color: "white" }}>+</Typography>
                  </Button>
                </span>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default ProductDetails;
