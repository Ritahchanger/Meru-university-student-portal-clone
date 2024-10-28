import ProfileIcon from "../../../../Assets/images/profileIcon.png";
const PersonalInformation = () => {
  return (
    <div className="personal-information">
      <h3 className="subtitle">Personal Information</h3>
      <div className="profile-icon-wrapper">
        <img src={ProfileIcon} alt="" />
      </div>
    </div>
  );
};

export default PersonalInformation;
