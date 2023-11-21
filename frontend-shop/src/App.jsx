import { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from './router/router';

function App() {


  return (
    <>

      <ToastContainer
        style={{zIndex:"9999999"}}
        hideProgressBar={true}
        position="bottom-left"
        autoClose={3000}
        newestOnTop={true}
        closeOnClick
      />
      
      <RouterProvider router={router} />

    </>
  )
}

export default App;
