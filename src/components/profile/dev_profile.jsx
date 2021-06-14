import "../../styles/dev_profile.css";
import { FaInstagram } from "react-icons/fa";

const DevProfile = (props) => {
  return (
    <div className="profile_div">
      <div className="profile">
        <div className="img_div">
          <img src={props.images.image} alt="" className="dev_image" />
        </div>
        <div className="name">
          <p>{props.images.name}</p>
        </div>
        <div className="comment">
          <span className="comment_txt">{props.images.comment}</span>
        </div>
        <div className="insta-icon">
          <a href={props.images.link} className="insta-link" target="_blank" rel="noreferrer">
            <FaInstagram className="insta" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevProfile;
