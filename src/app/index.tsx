import React, { FC } from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CartPage from "pages/CartPage/CartPage";

interface IProps {};

// This is a React functional component that takes in `IProps` as its props.
const App: React.FunctionComponent<IProps> = (props) => {
    // This component returns a `BrowserRouter` component that contains two `Route` components.
    // The `path` prop of the first `Route` is set to `'/'` and the `element` prop is set to the `HomePage` component.
    // The `path` prop of the second `Route` is set to `'/cart'` and the `element` prop is set to the `CartPage` component.
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<CartPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;