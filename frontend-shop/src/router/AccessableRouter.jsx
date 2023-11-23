import PageLayout from "../components/page-layout/PageLayout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";

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
        ]
    }
];

export default AccessableRouter;
