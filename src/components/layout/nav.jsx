import '../../styles/nav.css';
import CartSvg from '../assets/svg/svg';

const Nav = () => {
    return (
        <>
            <nav>
        <ul>
            <li>
                <a href="./index.html">
                    <CartSvg />
                </a>
            </li>
            <li>
                <a href="/category">
                    Category
                </a>
            </li>
            <li>
                <a href="/about">
                    About Us
                </a>
            </li>
        </ul>
    </nav>
        </>
    );
}

export default Nav;