import { createBrowserRouter } from "react-router-dom"
import publicRouter from "./PublicRouter"
import privateRouter from "./PrivateRouter"
import accessibleRouter from "./accessibleRouter";


// create browser router
const router = createBrowserRouter([...accessibleRouter, ...publicRouter, ...privateRouter])

export default router;
