import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../axios/axios";
import { useDispatch } from "react-redux";
import { setCurrentUserAndToken } from "../redux/features/currentUserSlice";

export const SignUp = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const dispatch = useDispatch();

    const [error, setError] = useState({ __html: "" });

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axiosClient
            .post("/sign-up", user)
            .then(({ data }) => {
                dispatch(setCurrentUserAndToken(data));
            })
            .catch((error) => {
                const inputErrorArray = Object.values(
                    error.response.data.errors
                );
                const errorArr = [].concat(...inputErrorArray);
                setError({ __html: errorArr.join("<br />") });
            });
    };

    const handleNameInputChange = (e) => {
        setUser({ ...user, name: e.target.value });
    };

    const handleEmailInputChange = (e) => {
        setUser({ ...user, email: e.target.value });
    };

    const handlePasswordInputChange = (e) => {
        setUser({ ...user, password: e.target.value });
    };

    const handleConfirmPasswordChange = (e) => {
        setUser({ ...user, password_confirmation: e.target.value });
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
                        Register your account
                    </h2>
                </div>

                <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                    {error.__html && (
                        <div
                            className="bg-red-500 rounded py-2 px-3 text-white"
                            dangerouslySetInnerHTML={error}
                        ></div>
                    )}

                    <form
                        onSubmit={handleFormSubmit}
                        className="space-y-4"
                        action="#"
                        method="POST"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Fullname
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={handleNameInputChange}
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={user.name}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
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
                                    value={user.email}
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
                                    value={user.password}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={handleConfirmPasswordChange}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={user.password_confirmation}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up for free
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already registered? &nbsp;
                        <Link
                            to="/login"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Login Here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};
