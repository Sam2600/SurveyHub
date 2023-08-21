import { Navigate, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../views/Dashboard";
import { Survey } from "../views/Survey";
import { Login } from "../views/Login";
import { SignUp } from "../views/SignUp";
import { GuestLayout } from "../components/layouts/GuestLayout";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { SurveyView } from "../views/SurveyView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
               path: "/dashboard",
               element: <Navigate to="/" />
            },
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/surveys",
                element: <Survey />,
            },
            {
                path: "surveys/create",
                element: <SurveyView />
            }
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "sign-up",
                element: <SignUp />,
            },
        ],
    },
]);
