import { RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedinUser } from "./features/auth/authApiSlice";
import { setMessageEmpty } from "./features/auth/authSlice";
import { getAllPermission, getAllRole } from "./features/user/userApiSlice";
import { getSellerOrAdminBrands, getShopTag } from "./features/shop/shopAoiSlice";

function App() {

  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if(error){
        dispatch(setMessageEmpty());
    }
    if(message){
        dispatch(setMessageEmpty());
    }
}, [error, message]);

  useEffect(() => {
    dispatch(getAllPermission());
    dispatch(getAllRole());
    dispatch(getSellerOrAdminBrands());
    dispatch(getShopTag());
  }, [dispatch]);

  useEffect(() => {
    if(localStorage.getItem("user")){
      dispatch(getLoggedinUser());
    }
  }, [dispatch]);

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
