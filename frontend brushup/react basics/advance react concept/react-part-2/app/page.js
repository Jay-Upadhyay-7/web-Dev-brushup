"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  const notify=()=>{
    toast("Welcome")
  }
  return (
    <div>
      <button onClick={notify}>Click here </button>
      {/* toast container component is loaded from react toastify library we dont create it  */}
      <ToastContainer/>
      {/* toast ko ham modify kar skte h uske saare method or customisation diye hue h react toastify ki website m */}
    </div>
  )
}

export default page

