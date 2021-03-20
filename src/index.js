import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './context/ProductsContext';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/UserContext';

//domain dev-n0x8f459.eu.auth0.com
//client id noDjYwdSXiwNwV8SfYrQjMEK9EdCElHE
ReactDOM.render(
    <Auth0Provider domain={process.env.REACT_APP_AUTH_DOMAIN} clientId={process.env.REACT_APP_AUTH_CLIENT_ID} redirectUri={window.location.origin} cacheLocation='localstorage'>
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
