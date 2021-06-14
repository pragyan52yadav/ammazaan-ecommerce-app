import "../../styles/cart.css";

const Cart = (props) => {
    return (
        <div className="cards">
            <div className="product-card">
                <h3>{props.item.title}</h3>
                <img className="product_image" src={props.item.image} alt="" />
                <h3 className="price">{props.item.price}</h3>
                <button
                    className="cross"
                    onClick={() => props.removeItem(props.item)}
                >
                    x
                </button>
            </div>
        </div>
    );
};

export default Cart;
