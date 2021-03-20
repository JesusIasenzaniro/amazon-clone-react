import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname !== '/') window.scrollTo(0, 0);
    }, [pathname]);

    return children;
}

export default ScrollToTop;
