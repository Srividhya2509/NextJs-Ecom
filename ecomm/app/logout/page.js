"use client"
import { logoutUser } from '@/redux/slices/loginSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'; 

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect(() => {
    dispatch(logoutUser());
    router.push('/');
  }, [dispatch, router]); 

  return <div>Logging out...</div>; 
};

export default Logout;
