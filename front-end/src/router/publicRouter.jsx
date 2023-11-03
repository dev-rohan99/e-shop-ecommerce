import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PublicGard from "./PublicGard";

const publicRouter = [
    {
        element: <PublicGard/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ]
    }
];

export default publicRouter;
