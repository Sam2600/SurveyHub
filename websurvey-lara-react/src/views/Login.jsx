import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../axios/axios";
import { useDispatch } from "react-redux";
import { setCurrentUserAndToken } from "../redux/features/currentUserSlice";

export const Login = () => {

    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();

    const [error, setError] = useState({ __html: "" });


    const handleEmailInputChange = (e) => {
        setLoginUser({
            ...loginUser,
            email: e.target.value,
        });
    };

    const handlePasswordInputChange = (e) => {
        setLoginUser({
            ...loginUser,
            password: e.target.value,
        });
    };

    const handlSubmit = (e) => {
        e.preventDefault();
        axiosClient
            .post("/login", loginUser)
            .then(({ data }) => dispatch(setCurrentUserAndToken(data)))
            .catch((error) => {

                if (error.response.data.errors) {

                    const inputErrorArray = Object.values(
                        error.response.data.errors
                    );

                    const errorArr = [].concat(...inputErrorArray);
                    setError({ __html: errorArr.join("<br/> <br />") });
                }

                if (error.response.data.error) {

                    const err = error.response.data.error

                    setError({ __html: err });
                }

                return error
            });
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Log in to your account
                    </h2>
                </div>

                <div className=" mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    {error.__html && (
                        <div
                            className="bg-red-500 rounded py-2 px-3 text-white"
                            dangerouslySetInnerHTML={error}
                        ></div>
                    )}

                    <form
                        onSubmit={handlSubmit}
                        className="mt-8 space-y-6"
                        method="POST"
                    >
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={handleEmailInputChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={handlePasswordInputChange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon
                                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                        aria-hidden="true"
                                    />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member? &nbsp;
                        <Link
                            to="/sign-up"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Please register here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};
