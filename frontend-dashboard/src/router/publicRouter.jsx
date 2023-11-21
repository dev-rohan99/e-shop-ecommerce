import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PublicGard from "./PublicGard";

const publicRouter = [
    {
        element: <PublicGard/>,
        children: [
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
