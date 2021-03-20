import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';
import '../components/CSS/AuthWrapper.css';
const AuthWrapper = ({ children }) => {
    const { isLoading, error } = useAuth0();

    if (isLoading) {
        return (
            <div className='loading__auth__wrapper'>
                <Loading />
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        );
    }
    return <>{children}</>;
};

export default AuthWrapper;
