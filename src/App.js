import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav, Footer } from "./components/layout";
import {
  Home,
  About,
  CategoryPages,
  ProductList,
  CartPage,
} from "./components/pages";

const App = () => {
  return (
    // <h1>Hi</h1>
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Categories" exact component={() => <CategoryPages />} />
          <Route path="/ProductList" exact component={() => <ProductList />} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/Cart" exact component={() => <CartPage />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
