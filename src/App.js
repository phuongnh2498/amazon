import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import {Home,Checkout,Login,ProductsPage} from './Component'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './assets/FontAwsomeIcons'
import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
           <Route path="/login" component={Login}/>
           <Route path="/products" component={ProductsPage}/>
           <Route path="/products:id" component={ProductsPage}/>
           <Route path="/checkout" component={Checkout}/>
           <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
    </Router> 
  );
}

export default App;
