import { Box, Typography, Button } from "@mui/material";
import { Image } from "next/image";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';

const Navbar = () => {
    
  return (
    <Box sx={{ display: "flex",position:'sticky',  justifyContent:'space-between',  padding:'2rem', boxShadow:'1px 1px 4px rgba(0,0,0,0.5)', background:'#ef5350' }}>
      <Box sx={{ display: "flex", justifyContent:'space-between', alignItems:'center' }}>
        
        <Typography sx={{marginLeft:'1rem', color:'white', fontFamily:'cursive', fontSize:'30px'}}>E-Kart</Typography>
        
      </Box>
      <Box sx={{display:'flex', alignItems:'center'}}>
      <Button href="/products/cart">
        <ShoppingCartIcon sx={{Padding:'25px', color:'white'}}/>
        </Button>
        <Link href="/logout" >
        <LogoutIcon sx={{color:'white'}}/>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
