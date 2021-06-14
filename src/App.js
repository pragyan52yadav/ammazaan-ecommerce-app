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

class App extends React.Component {
    state = { cart: [] };

    onAddToCart = (item) => {
        this.state.cart.push(item);
        console.log(this.state.cart);
    };

    clearCart = () => {
        this.setState({ cart: [] });
    };

    removeItem = (item) => {
        let x = this.state.cart.indexOf(item);
        this.state.cart.splice(x, 1);
        this.setState({ cart: this.state.cart });
    };

    render() {
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
                            component={() => (
                                <CategoryPages onAddToCart={this.onAddToCart} />
                            )}
                        />
                        <Route
                            path="/ProductList"
                            exact
                            component={() => (
                                <ProductList onAddToCart={this.onAddToCart} />
                            )}
                        />
                        <Route
                            path="/About"
                            exact
                            component={() => <About />}
                        />
                        <Route
                            path="/Cart"
                            exact
                            component={() => (
                                <CartPage
                                    clearCart={this.clearCart}
                                    removeItem={this.removeItem}
                                    cart={this.state.cart}
                                />
                            )}
                        />
                    </Switch>
                    <Footer />
                </Router>
            </>
        );
    }
}

export default App;
