import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Home, Checkout, Login, ProductsPage, EachProduct } from './Component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer, Flip, } from 'react-toastify';
import './assets/FontAwsomeIcons'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer
        transition={Flip}
        position="bottom-right"
        autoClose={4000}
        newestOnTop={false}
        closeOnClick
        rtl
        draggable
      />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/products/:cateValue" component={ProductsPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product/:id" component={EachProduct} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
