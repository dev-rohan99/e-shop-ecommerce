import { RouterProvider } from "react-router-dom";
import './App.css';
import router from "./router/router";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/slick.css";
import "./assets/css/default.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/nice-select.css";
import "./assets/css/animate.css";

function App() {
  

  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App;
