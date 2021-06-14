import "../../styles/about.css";
import DevProfile from "../profile/dev_profile";
import Khwaish from "../assets/Khwaish.jpg";
import Pragyan from "../assets/Pragyan.jpeg";
import Ronit from "../assets/Ronit.jpeg";

const devImages = [
  {
    name: "Khwaish",
    image: Khwaish,
    link: "https://www.instagram.com/khwaiiii_/",
    comment: "I don't know how or why, but it is working.",
  },
  {
    name: "Pragyan",
    image: Pragyan,
    link: "https://www.instagram.com/sc0rp10n.py/",
    comment: "If mark saw this, he'd probably kill us.",
  },
  {
    name: "Ronit",
    image: Ronit,
    link: "https://www.instagram.com/shadowsouled/",
    comment: "Don't think about the code too much, because we didn't.",
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
