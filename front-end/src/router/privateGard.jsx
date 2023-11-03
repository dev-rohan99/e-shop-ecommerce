import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const privateGard = () => {

    const { user } = useSelector((state) => state.auth);

    return user ? <Outlet/> : <Navigate to={"login"}/>
}

export default privateGard;
