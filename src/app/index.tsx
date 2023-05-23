import React from "react"
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AccountPage from '../pages/AccountPage/index'

interface IProps {}

// This is a React functional component that takes in `IProps` as its props.
const App: React.FC<IProps> = (props) => {
    // This component returns a `BrowserRouter` component that contains two `Route` components.
    // The `path` prop of the first `Route` is set to `'/'` and the `element` prop is set to the `HomePage` component.
    // The `path` prop of the second `Route` is set to `'/cart'` and the `element` prop is set to the `CartPage` component.
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/following' element={<AccountPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App