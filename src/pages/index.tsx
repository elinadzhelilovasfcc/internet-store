import { lazy } from "react";
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const TestPage = lazy(() => import("./test"));

/**
 * Routing component handles the routing of different pages
 * @return {JSX.Element} Returns the JSX element of the component
 */
export const Routing = (): JSX.Element => {
    return (
        <Routes>
            {/* Render the TestPage component when the path is '/' */}
            <Route path="/" element={<TestPage/>} />
        </Routes>
    );
};

