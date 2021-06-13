import './nav.css';
import Cart from '../assets/svg';

const Nav = () => {
    return (
        <>
            <nav>
        <ul>
            <li>
                <a href="./index.html">
                    <Cart />
                </a>
            </li>
            <li>
                <a href="">
                    Category
                </a>
            </li>
            <li>
                <a href="./about-us.html">
                    About Us
                </a>
            </li>
        </ul>
    </nav>
        </>
    );
}

export default Nav;