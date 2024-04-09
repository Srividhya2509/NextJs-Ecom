"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@/redux/slices/registerSlice";
import {TextField,Button,Typography, Box} from "@mui/material";
import {red} from "@mui/material/colors"
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const Register = () => {
  const color=red[400];
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(createUser(userInfo)).then((success) => {
      if (success) {
        router.push("/components/auth");
      } else {
      }
    });
  };
  return (
    <><Navbar/>
    <Box sx={{display:'flex', justifyContent:'center', margin:'5rem', }}>
      <form onSubmit={handleRegister} style={{background:'#ffcdd2', padding:'30px', borderRadius:'10px'}}>
        <div className="card w-25  mx-auto text-center my-5 p-4">
          <Typography
            variant="h4"
            className="my-2 p-1"
            style={{ textShadow: "2px 2px 4px #ef5350", color: color }}
          >
            Register Form
          </Typography>
          <div className="my-4">
            <TextField
              id="standard-basic"
              label="username"
              variant="standard"
              value={userInfo.username}
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
              value={userInfo.password}
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
              Register
            </Button>
          </div>
        </div>
      </form>
    </Box>
    </>
  );
};

export default Register;
