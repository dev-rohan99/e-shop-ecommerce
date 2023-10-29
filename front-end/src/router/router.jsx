import { createBrowserRouter } from "react-router-dom"
import publicRouter from "./PublicRouter"
import privateRouter from "./PrivateRouter"


// create browser router
const router = createBrowserRouter([...publicRouter, ...privateRouter])

export default router;
