import DashboardLayout from "../components/dashboard-layout/DashboardLayout";
import Dashboard from "../pages/admin-dashboard/Dashboard";
import Sellers from "../pages/sellers/Sellers";
import Tags from "../pages/tags/Tags";

const privateRouter = [
    {
        element: <DashboardLayout/>,
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
        ]
    }
];

export default privateRouter;
