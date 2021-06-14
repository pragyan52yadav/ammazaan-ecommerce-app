import Slider from './slider';
import '../../styles/offer.css'

const ImageData = [
  {
    image: "../assets/Item1.png",
  },
  {
    image: "../assets/Item2.png",
  },
  {
    image: "../assets/Item3.png",
  },
  {
    image: "../assets/Item4.png",
  },
];

const Offer = () => {
  return <Slider slides={ImageData} />;
};

export default Offer;
