import PageLayout from "../components/page-layout/PageLayout";
import Home from "../pages/home/Home";

const AccessableRouter = [
    {
        element: <PageLayout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    }
];

export default AccessableRouter;
