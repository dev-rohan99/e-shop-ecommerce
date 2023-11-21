import PageLayout from "../components/page-layout/PageLayout";
import UserDashboard from "../pages/user-dashboard/UserDashboard";
import PrivateGard from "./PrivateGard";


const privateRouter = [
    {
        element: <PageLayout/>,
        children: [{
        element: <PrivateGard/>,
            children: [
                {
                    path: "/user-dashboard",
                    element: <UserDashboard />
                }
            ]
        }]
    }
];

export default privateRouter;
