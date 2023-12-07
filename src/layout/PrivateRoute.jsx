import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user,isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <span className="loading loading-ball loading-lg"></span>
    }
    if(user){
        return children
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;