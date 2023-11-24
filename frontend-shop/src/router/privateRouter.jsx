import PageLayout from "../components/page-layout/PageLayout";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import OrderComplete from "../pages/order-complete/OrderComplete";
import PrivateGard from "./PrivateGard";
import MyAccountLayout from "../components/my-account-layout/MyAccountLayout";
import Dashboard from "../pages/dashboard/Dashboard";


const privateRouter = [
    {
        element: <PageLayout/>,
        children: [{
            element: <PrivateGard/>,
            children: [
                {
                    element: <MyAccountLayout/>,
                    children:[
                        {
                            path: "/my-account/dashboard",
                            element: <Dashboard />
                        }
                    ]
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
