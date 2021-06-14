import Item1 from "../assets/Item1.png";
import Item2 from "../assets/Item2.png";
import Item3 from "../assets/Item3.png";
import Item4 from "../assets/Item4.png";
import Slider from "./slider";
import "../../styles/offer.css";

const ImageData = [
  {
    image: Item1,
  },
  {
    image: Item2,
  },
  {
    image: Item3,
  },
  {
    image: Item4,
  },
];

const Offer = () => {
  return (
    <>
      <div className="Offer_div">
        <Slider slides={ImageData} />
      </div>
    </>
  );
};

export default Offer;
