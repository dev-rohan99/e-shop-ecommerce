import PageLayout from "../components/page-layout/PageLayout";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PublicGard from "./PublicGard";

const PublicRouter = [
    {
        element: <PageLayout/>,
        children: [{
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
        }]
    }
];

export default PublicRouter;
