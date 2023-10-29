import DashboardLayout from "../components/dashboard-layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";

const privateRouter = [
    {
        element: <DashboardLayout/>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
        ]
    }
];

export default privateRouter;
