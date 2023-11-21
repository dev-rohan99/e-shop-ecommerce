import UserDashboard from "../pages/user-dashboard/UserDashboard";
import PrivateGard from "./PrivateGard";


const privateRouter = [
    {
        element: <PrivateGard/>,
        children: [
            {
                path: "/user-dashboard",
                element: <UserDashboard />
            }
        ]
    }
];

export default privateRouter;
