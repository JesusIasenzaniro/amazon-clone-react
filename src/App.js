import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { Footer } from './components/Footer';
import CartPage from './pages/CartPage';
import ProductsPages from './pages/ProductsPages';
import { SingleProductPage } from './pages/SingleProductPage';
import Checkout from './pages/Checkout';
import Error from './components/Error';
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';
import ScrollToTop from './components/ScrollToTop';
import FormPage from './pages/FormPage';
import './App.css';
function App() {
    return (
        <AuthWrapper>
            <Router>
                <ScrollToTop>
                    <Header />
                    <div className='body__container'>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='/CartPage'>
                                <CartPage />
                            </Route>
                            <Route exact path='/FormPage'>
                                <FormPage />
                            </Route>
                            <Route exact path='/ProductsPages'>
                                <ProductsPages />
                            </Route>
                            <Route exact path='/ProductsPages/:id' children={<SingleProductPage />} />
                            <PrivateRoute exact path='/Checkout'>
                                <Checkout />
                            </PrivateRoute>
                            <Route exact path='*'>
                                <Error />
                            </Route>
                        </Switch>
                    </div>
                    <Footer />
                </ScrollToTop>
            </Router>
        </AuthWrapper>
    );
}

export default App;
