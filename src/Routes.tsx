import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import SignUpTwo from "./Pages/SignUpTwo";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Product from "./Pages/ProductDetail";
import AddressSearch from "./Pages/AddressSearch";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signup2" component={SignUpTwo} />
        <Route path="/addresssearch" component={AddressSearch} />
        <Route path="/cart" component={Cart} />
        <Route path="/shop" component={Shop} />
        <Route path="/product" component={Product} />
      </Switch>
      
    </Router>
    
  );
};

export default Routes;
