import "../../styles/nav.css";
import CartSvg from "../assets/svg/svg";
import { Link, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link class="a_logo" to="/">
          <img src="../assets/Logo.png" alt="Ammazaan" className="logo"/>
        </Link>
        <ul>
          <li>
            <Link className="" to="/categories">
              Category
            </Link>
          </li>
          <li>
            <Link className="" to="/productList">
              All Products
            </Link>
          </li>
          <li>
            <Link className="" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="" to="/cart">
              <CartSvg />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default withRouter(Nav);
