"use client";
import React, { useEffect, useState } from "react";
import {TextField,Button,Typography, Box} from "@mui/material";
import {red} from "@mui/material/colors"
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/slices/loginSlice";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Navbar from "../Navbar";

const Login = () => {
  const color=red[400];
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.loginInfo.user || []);
  console.log(userList);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(loginUser());
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    const user = userList.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      alert("successful");
      router.push("/products");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
    <Box sx={{display:'flex', justifyContent:'center', margin:'5rem', }}>
      <form onSubmit={handleLogin} style={{background:'#ffcdd2', padding:'30px', borderRadius:'10px'}}>
        <div className="card w-25  mx-auto text-center my-5 p-4">
          <Typography
            variant="h4"
            className="my-2 p-1"
            style={{ textShadow: "2px 2px 4px #ef5350", color: color }}
          >
            Login Form
          </Typography>
          <div className="my-4">
            <TextField
              id="standard-basic"
              label="username"
              variant="standard"
              value={formData.username}
              name="username"
              onChange={handleChange}
              sx={{margin:'1rem'}}
            />
          </div>
          <div className="my-4">
            <TextField
              id="standard-basic"
              label="password"
              type="password"
              variant="standard"
              value={formData.password}
              onChange={handleChange}
              name="password"
              sx={{margin:'1rem'}}
            />
          </div>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              style={{ background: color, boxShadow: "2px 2px 4px gray" }}
              className="shadow"
              type="submit"
              sx={{margin:'1rem'}}
            >
              LOGIN
            </Button>
            <Link href='/register'>Register Here</Link>
          </div>
        </div>
      </form>
    </Box></>
  );
};

export default Login;
