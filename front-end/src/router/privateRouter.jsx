import DashboardLayout from "../components/dashboard-layout/DashboardLayout";
import Dashboard from "../pages/admin-dashboard/Dashboard";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Sellers from "../pages/sellers/Sellers";
import Tags from "../pages/tags/Tags";
import PrivateGard from "./PrivateGard";

const privateRouter = [
    {
        element: <DashboardLayout/>,
        children: [
            {
                element: <PrivateGard/>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "/dashboard/tags",
                        element: <Tags />
                    },
                    {
                        path: "/dashboard/sellers",
                        element: <Sellers />
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile />
                    },
                ]
            }
        ]
    }
];

export default privateRouter;
