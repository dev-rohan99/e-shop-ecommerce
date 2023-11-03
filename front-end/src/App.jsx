import { RouterProvider } from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedinUser } from "./features/auth/authApiSlice";
import createToast from "./utilities/createToast";
import { setMessageEmpty } from "./features/auth/authSlice";

function App() {

  const dispatch = useDispatch();
  const { error, message, user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if(error){
        dispatch(setMessageEmpty());
    }
}, [error, message]);

  useEffect(() => {
    dispatch(getLoggedinUser());
  }, [dispatch]);

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
