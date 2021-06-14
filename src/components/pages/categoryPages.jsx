import "../../styles/category_page.css";
import Category from "../category/category";

const CategoryPages = (props) => {
    return (
        <>
            <Category onAddToCart={props.onAddToCart} />
        </>
    );
};

export default CategoryPages;
