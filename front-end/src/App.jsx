import { RouterProvider } from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import router from "./router/router";
import { ToastContainer } from "react-toastify";

function App() {
  

  return (
    <>

      <ToastContainer
        style={{zIndex:"9999999"}}
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
