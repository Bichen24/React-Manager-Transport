/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";
import Error404 from "../views/ErrorPage/Error404";
import Error403 from "../views/ErrorPage/Error403";
import Login from "../views/Login";
import AppLayout from "../Layout";

const Welcome = lazy(() => import("../views/Welcome"));
const router: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to={"/welcome"} />,
    },
    {
        element: <AppLayout />,
        id: "layout",
        children: [
            {
                path: "/welcome",
                element: <Welcome />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <Navigate to={"/404"} />,
    },
    {
        path: "/403",
        element: <Error403 />,
    },
    {
        path: "/404",
        element: <Error404 />,
    },
];
export default createBrowserRouter(router);
