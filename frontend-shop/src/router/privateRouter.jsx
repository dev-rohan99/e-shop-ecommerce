import PageLayout from "../components/page-layout/PageLayout";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import OrderComplete from "../pages/order-complete/OrderComplete";
import PrivateGard from "./PrivateGard";
import MyAccount from "../pages/my-account/MyAccount";


const privateRouter = [
    {
        element: <PageLayout/>,
        children: [{
        element: <PrivateGard/>,
            children: [
                {
                    path: "/user-dashboard",
                    element: <MyAccount />
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
