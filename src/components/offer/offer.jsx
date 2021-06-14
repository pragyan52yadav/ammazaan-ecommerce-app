import Slider from './slider';
import '../../styles/offer.css'

const ImageData = [
  {
    image: "https://images.freeimages.com/images/small-previews/eee/summer-nature-3-1370238.jpg",
  },
  {
    image: "https://images.freeimages.com/images/small-previews/773/koldalen-4-1384902.jpg",
  },
  {
    image: "https://images.freeimages.com/images/small-previews/716/flower-1372780.jpg",
  },
  {
    image: "https://images.freeimages.com/images/small-previews/10f/autumn-1-1382513.jpg",
  },
];

const Offer = () => {
  return <Slider slides={ImageData} />;
};

export default Offer;
