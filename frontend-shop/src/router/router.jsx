import { createBrowserRouter } from "react-router-dom"
import publicRouter from "./PublicRouter"
import privateRouter from "./PrivateRouter"
import AccessableRouter from "./AccessableRouter";


// create browser router
const router = createBrowserRouter([...AccessableRouter, ...publicRouter, ...privateRouter])

export default router;
