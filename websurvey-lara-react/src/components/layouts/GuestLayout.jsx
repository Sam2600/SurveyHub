import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentToken } from "../../redux/features/currentUserSlice";

export const GuestLayout = () => {
    const token = useSelector(currentToken);

    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};
