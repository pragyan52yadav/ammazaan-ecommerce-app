import Cart from "../cart/cart";

const CartPage = (props) => {
    let total = 0;
    const wtf = props.cart.map((item) => {
        total += item["price"];
        return <Cart key={item.id} removeItem={props.removeItem} item={item} />;
    });
    return (
        <>
            {wtf}
            <h5>Total = $ {parseInt(total)}</h5>
            <button onClick={() => props.clearCart()}>Clear Cart</button>
        </>
    );
};

export default CartPage;
