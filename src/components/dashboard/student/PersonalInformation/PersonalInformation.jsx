import ProfileIcon from "../../../../Assets/images/profileIcon.png";
import "./PersonalInformation.css";
const studentInformation = {
  name: "MUNYAO PETER DENNIS",
  regNo: "CT201/106094/21",
  idNo: "39688058",
  Campus: "MAIN",
  gender: "Male",
  dob: "29/10/2002",
  county: "MAKUENI",
  nationality: "KEN",
  registeredUnits: [{ thisSem: 8 }, { lastSem: 43 }],
};
const PersonalInformation = () => {
  return (
    <div className="personal-information">
      <h3 className="subtitle">Personal Information</h3>
      <div className="profile-icon-wrapper">
        <img src={ProfileIcon} alt="" />
      </div>
      <ul>
        <li>
          <p>{studentInformation.name}</p>
        </li>
        <li>
          <p>{studentInformation.regNo}</p>
        </li>
        <li>
          <p>{studentInformation.idNo}</p>
        </li>
        <li>
          <p>{studentInformation.Campus}</p>
        </li>
        <li>
          <p>{studentInformation.gender}</p>
        </li>
        <li>
          <p>{studentInformation.dob}</p>
        </li>
        <li>
          <p>{studentInformation.county}</p>
        </li>
        <li>
          <p>{studentInformation.nationality}</p>
        </li>
      </ul>
    </div>
  );
};

export default PersonalInformation;
