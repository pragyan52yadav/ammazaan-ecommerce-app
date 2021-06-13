import "../../styles/nav.css";
import CartSvg from "../assets/svg/svg";
import { Link, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link class="" to="/">
              <CartSvg />
            </Link>
          </li>
          <li>
            <Link class="" to="/category">
              Category
            </Link>
          </li>
          <li>
            <Link class="" to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default withRouter(Nav);
