import PageLayout from "../components/page-layout/PageLayout";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import OrderComplete from "../pages/order-complete/OrderComplete";
import PrivateGard from "./PrivateGard";
import MyAccountLayout from "../components/my-account-layout/MyAccountLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/orders/Orders";
import Downloads from "../pages/downloads/Downloads";
import Addresses from "../pages/addresses/Addresses";
import AccountDetails from "../pages/account-details/AccountDetails";
import Wishlist from "../pages/wishlist/Wishlist";


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
                        },
                        {
                            path: "/my-account/orders",
                            element: <Orders />
                        },
                        {
                            path: "/my-account/downloads",
                            element: <Downloads />
                        },
                        {
                            path: "/my-account/addresses",
                            element: <Addresses />
                        },
                        {
                            path: "/my-account/account-details",
                            element: <AccountDetails />
                        }
                    ]
                },
                {
                    path: "/wishlist",
                    element: <Wishlist />
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
