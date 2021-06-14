import "../../styles/nav.css";
import Logo from "../assets/Logo.png";
import CartSvg from "../assets/svg/svg";
import { Link, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link class="a_logo" to="/">
          <img src={Logo} alt="Ammazaan" className="logo" />
        </Link>
        <ul list-style-type>
          <li>
            <Link className="category-link" to="/categories">
              Category
            </Link>
          </li>
          <li>
            <Link className="all-products-link" to="/productList">
              All Products
            </Link>
          </li>
          <li>
            <Link className="about-us-link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="cart-icon" to="/cart">
              <CartSvg />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default withRouter(Nav);
