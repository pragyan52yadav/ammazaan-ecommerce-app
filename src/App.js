import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav, Footer } from "./components/layout";
import {
<<<<<<< HEAD
  Home,
  About,
  CategoryPages,
  ProductList,
  CartPage,
=======
    Home,
    About,
    CategoryPages,
    ProductList,
    CartPage,
>>>>>>> 5970eef2eaeb3d48516c225b6c54968bd9151fbe
} from "./components/pages";

const App = () => {
    return (
        // <h1>Hi</h1>
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route
                        path="/Categories"
                        exact
                        component={() => <CategoryPages />}
                    />
                    <Route
                        path="/ProductList"
                        exact
                        component={() => <ProductList />}
                    />
                    <Route path="/About" exact component={() => <About />} />
                    <Route path="/Cart" exact component={() => <CartPage />} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
};

export default App;
