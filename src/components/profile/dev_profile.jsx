import "../../styles/dev_profile.css";

const DevProfile = (props) => {
  return (
    <div className="profile">
      <img
        src={props.images.image}
        alt=""
        className="dev_image"
      />
      <div className="name">
        <p>{props.images.name}</p>
      </div>
    </div>
  );
};

export default DevProfile;
