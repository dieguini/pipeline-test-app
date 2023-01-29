import React from 'react';
import { createBrowserRouter, defer } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import Layout from '../pages/Layout';
import { ProtectedLayout } from '../pages/ProtectedLayout'
import ChatPage from '../pages/ChatPage'
import SignUpPage from '../pages/SignupPage'
import { AuthLayout } from '../components/authentication/AuthLayout';
import { Auth } from 'aws-amplify';


const getUserData = () =>
    new Promise( async resolve => {
        try{
            resolve( await Auth.currentAuthenticatedUser())
        }catch(err){ resolve(null) }
    });


const Router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        loader: () => defer({ userPromise: getUserData() }),
        children: [
            {
                path: "/",
                element: <Layout />,
                children: [
                    {
                        path: "/",
                        element: <HomePage />
                    },
                    {
                        path: "/login",
                        element: <LoginPage />,
                    },
                    {
                        path: "/signup",
                        element: <SignUpPage />
                    }
                ]
            },
            {
                path: "/dashboard",
                element: <ProtectedLayout />,
                children: [
                    {
                        path: "chat",
                        element: <ChatPage />
                    }
                ]
            }
        ]
    }
]);

export default Router