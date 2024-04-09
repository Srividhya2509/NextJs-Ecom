"use client"
import React, { useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { fetchProducts, selectProducts } from "@/redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Link from 'next/link'

const Products = () => {
  const dispatch = useDispatch();
   const categories = useSelector(selectProducts);
    console.log(categories)
    

  useEffect(() => {
    const data = dispatch(fetchProducts());
    console.log(data)
  }, []); 


  return (
    <Box><Navbar/>
      <Typography variant="h4" align="center" sx={{ color: "#c62828", padding: '20px', textShadow: '2px 2px 2px white' }}>
        Product Categories
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
      >
           {Array.isArray(categories.products) && categories.products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <div style={{ textAlign: "center" }}>
              <Box sx={{ height: "400" }}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  width={150}
                  height={150}
                  style={{ borderRadius: '20px' }}
                />
              </Box>
              <Typography variant="h5" sx={{ color: "#ef5350" }}>{product.title}</Typography>
              <Link
                href={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ background: "#c62828" }}>
                  <Typography sx={{ color: "white" }}>Add</Typography>
                </Button>
              </Link>
            </div>
          </Grid>
        ))}   
      </Grid>
    </Box>
  );
};

export default Products;
