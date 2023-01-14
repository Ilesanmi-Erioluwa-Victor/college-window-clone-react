import React from "react";
import { ToastContainer } from "react-toastify";

export default function Toastify() {
  return (
    <ToastContainer
      limit={1}
      theme="dark"
      position="bottom-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
