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
      <h3 className="subtitle font-semibold">Personal Information</h3>
      <div className="profile-icon-wrapper">
        <img src={ProfileIcon} alt="" />
        <button className="text-xs-extra custom-orange py-[0.5rem] px-[1rem] mt-10">Update Information</button>
      </div>
      <ul>
        <li>
          <p>{studentInformation.name}</p>
        </li>
        <li>
          <p><span className="font-semibold">Reg No:</span>{studentInformation.regNo}</p>
        </li>
        <li >
          <p><span className="font-semibold">ID/Passport:</span>{studentInformation.idNo}</p>
        </li>
        <li>
          <p><span className="font-semibold">Campus:</span>{studentInformation.Campus}</p>
        </li>
        <li>
          <p><span className="font-semibold">Gender:</span>{studentInformation.gender}</p>
        </li>
        <li>
          <p><span className="font-semibold">DOB:</span>{studentInformation.dob}</p>
        </li>
        <li>
          <p><span className="font-semibold">County:</span>{studentInformation.county}</p>
        </li>
        <li>
          <p><span className="font-semibold">Nationality:</span>{studentInformation.nationality}</p>
        </li>
      </ul>
    </div>
  );
};

export default PersonalInformation;
