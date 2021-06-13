import './nav.css';
import Cart_svg from '../assets/svg';

const Nav = () => {
    return (
        <>
            <nav>
        <ul>
            <li>
                <a href="./index.html">
                    <Cart_svg />
                </a>
            </li>
            <li>
                <a href="">
                    Category
                </a>
            </li>
            <li>
                <a href="">
                    About Us
                </a>
            </li>
        </ul>
    </nav>
        </>
    );
}

export default Nav;