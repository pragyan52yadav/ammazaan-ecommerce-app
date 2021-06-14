import "../../styles/nav.css";
import Logo from "../assets/Logo.png";
import CartSvg from "../assets/svg/svg";
import { Link, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav_div">
          <Link className="a_logo" to="/">
            <img src={Logo} alt="Ammazaan" className="logo" />
          </Link>
          <ul>
            <li className="link_li">
              <Link className="link" to="/categories">
                Category
              </Link>
            </li>
            <li className="link_li">
              <Link className="link" to="/productList">
                All Products
              </Link>
            </li>
            <li className="link_li">
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li className="cart-icon">
              <Link className="cart_link" to="/cart">
                <CartSvg />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Nav);
