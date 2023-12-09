import DashboardLayout from "../components/dashboard-layout/DashboardLayout";
import Dashboard from "../pages/admin-dashboard/Dashboard";
import Brand from "../pages/brand/Brand";
import Permission from "../pages/permission/Permission";
import Profile from "../pages/profile/Profile";
import Role from "../pages/role/Role";
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
                        path: "/",
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
                        path: "/dashboard/brands",
                        element: <Brand />
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile />
                    },
                    {
                        path: "/dashboard/roles",
                        element: <Role />
                    },
                    {
                        path: "/dashboard/permissions",
                        element: <Permission />
                    },
                ]
            }
        ]
    }
];

export default privateRouter;
