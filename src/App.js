import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Home, Orders, NotFoundPage, CartPage, Login, ProductsPage, EachProduct, Register, Payment } from './Component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer, Flip, } from 'react-toastify';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import PrivateRoute from "./Component/PrivateRoute"

import './assets/FontAwsomeIcons'
import 'react-toastify/dist/ReactToastify.css';
const promise = loadStripe(
  "pk_test_51HwrqYHtfvuHyk2a0InIWB57x84pEfFAk0xZFyehPi8QenkMC2cjjV8o7S6xLL4SnNV9h3H3ryMP2ZNTiT9Oj7US00TQKr1sTt"
)
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
        <Route path="/payment" >
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <PrivateRoute path="/orders" component={Orders} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/products/search/:searchvalue" component={ProductsPage} />
        <Route path="/products/:cateValue" component={ProductsPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/product/:id" component={EachProduct} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
