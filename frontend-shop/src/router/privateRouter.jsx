import PageLayout from "../components/page-layout/PageLayout";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import OrderComplete from "../pages/order-complete/OrderComplete";
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
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/checkout",
                    element: <Checkout />
                },
                {
                    path: "/order-complete",
                    element: <OrderComplete />
                },
            ]
        }]
    }
];

export default privateRouter;
