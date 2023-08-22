import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUser } from "../../redux/features/currentUserSlice";

export const GuestLayout = () => {

    const user = useSelector(currentUser);

    if (user.currentToken) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};
