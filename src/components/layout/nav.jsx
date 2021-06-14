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
          <li className="category-link">
            <Link className="link" to="/categories">
              Category
            </Link>
          </li>
          <li className="all-products-link">
            <Link className="Link" to="/productList">
              All Products
            </Link>
          </li>
          <li className="about-us-link">
            <Link className="Link" to="/about">
              About Us
            </Link>
          </li>
          <li className="cart-icon">
            <Link to="/cart">
              <CartSvg />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default withRouter(Nav);
