import PageLayout from "../components/page-layout/PageLayout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import VendorStores from "../components/vendor-layout/VendorLayout";
import VendorLayout from "../components/vendor-layout/VendorLayout";
import VendorList from "../pages/vendor-list/VendorList";
import VendorGrid from "../pages/vendor-grid/VendorGrid";
import ShopSingle from "../pages/shop-single/ShopSingle";

const AccessableRouter = [
    {
        element: <PageLayout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/shop/:id",
                element: <ShopSingle />
            },
            {
                element: <VendorLayout/>,
                children: [
                    {
                        path: "/vendors-list",
                        element: <VendorList />
                    },
                    {
                        path: "/vendors-grid",
                        element: <VendorGrid />
                    },
                ]
            },
        ]
    }
];

export default AccessableRouter;
