import "../../styles/dev_profile.css";

const DevProfile = (props) => {
  return (
    <div className="profile">
      <img
        src={props.images.image}
        alt=""
        className="dev_image"
      />
      <span className="name">
        <p>{props.images.name}</p>
      </span>
    </div>
  );
};

export default DevProfile;
