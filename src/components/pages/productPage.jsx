import "../../styles/productPage.css";
import Products from "../products/products";

const ProductPage = (props) => {
    return (
        <>
            <Products onAddToCart={props.onAddToCart} />
        </>
    );
};

export default ProductPage;
