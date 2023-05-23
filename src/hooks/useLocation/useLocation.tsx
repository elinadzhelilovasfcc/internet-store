import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

/**
 * Returns the current path using the `useLocation` hook from `react-router-dom`.
 *
 * @return {string} The current path as a string.
 */
const useCurrentPath = () => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location])

    return {
        currentPath,
        setCurrentPath
    }
};

export default useCurrentPath