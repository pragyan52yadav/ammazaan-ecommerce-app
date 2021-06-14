import "../../styles/dev_profile.css";


const DevProfile = () => {
  return (
    <div className="profile">
      <img
        src="https://miro.medium.com/max/2400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        alt="Dev"
        className="dev_image"
      />
      <div className="name">
        <p>Dev Name</p>
      </div>
    </div>
  );
};

export default DevProfile;
