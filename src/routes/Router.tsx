import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Onboarding from "../pages/onboarding/page";
import EbtiTestPage from "../pages/ebti/test/page";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: "/", element: <Onboarding /> },
            { path: "/onboarding", element: <Onboarding /> },
            { path: "/ebti-test", element: <EbtiTestPage /> },
        ],
    },
]);

export default router;
