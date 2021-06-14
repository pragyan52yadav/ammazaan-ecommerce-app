import "../../styles/cart.css";

const Cart = (props) => {
    console.log("hehehe", props.cart);
    return (
        <div>
            <h3>{props.item.title}</h3>
            <img src={props.item.image} alt="" />
            <button
                className="cross"
                onClick={() => props.removeItem(props.item)}
            >
                x
            </button>
        </div>
    );
};

export default Cart;
