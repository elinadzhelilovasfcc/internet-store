import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const useRouter = () => {
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState(location.pathname)

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location])

    const handleRouteChange = () => {
        setCurrentPath(currentPath)
    }
    useEffect(() => {
        window.addEventListener('popstate', handleRouteChange);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    const push = (path: string) => {
        window.history.pushState({}, '', path);
        handleRouteChange();
    };

    const replace = (path: string) => {
        window.history.replaceState({}, '', path);
        handleRouteChange();
    };
    return (
        {
            currentPath,
            push,
            replace,
        }
    )
}

export default useRouter