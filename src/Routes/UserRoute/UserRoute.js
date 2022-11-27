import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import UseUser from "../../hooks/UseUser";
import Loading from '../../Components/Pages/Shared/Loading/Loading'




const UserRoute = ({children}) => {
  
    const { user, loading } = useContext(AuthContext);
    const [isUser, isUserLoading] = UseUser(user?.email);
    const location = useLocation();

    if (loading || isUserLoading) {
        return <Loading></Loading>
    }

    if (user && isUser) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

}

export default UserRoute;