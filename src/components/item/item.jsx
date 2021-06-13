import "../../styles/item.css";

const Item = () => {
  return (
    <div className="item">
      <img
        src="https://i.pinimg.com/originals/2f/c9/db/2fc9db8b1f8ebc35d4762ba1c54bc067.jpg"
        alt="Blue Dress"
        class="product_image"
      />
      <div class="detail">
        <p>Blue Dress Rs. 6969</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;