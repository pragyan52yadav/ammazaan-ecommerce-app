import "../../styles/about.css";
import DevProfile from "../profile/dev_profile";
import Khwaish from "../assets/Khwaish.jpg";
import Pragyan from "../assets/Pragyan.jpeg";
import Ronit from "../assets/Ronit.jpeg";
// import P;

const devImages = [
  {
    name: "Khwaish",
    image: Khwaish,
  },
  {
    name: "Pragyan",
    image: Pragyan,
  },
  {
    name: "Ronit",
    image: Ronit,
  },
];

const Profile = devImages.map((images) => {
  return <DevProfile images={images} />;
});
const About = () => {
  return (
    <>
      <div className="about">{Profile}</div>
    </>
  );
};

export default About;
