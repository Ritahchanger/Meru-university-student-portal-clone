import ProfileIcon from "../../../../Assets/images/profileIcon.png";
import UpdateProfileInfo from "../UpdateProfileInfo/UpdateProfileInfo";
import "./PersonalInformation.css";
const studentInformation = {
  name: "PETER DENNIS MUNYAO",
  regNo: "CT201/11111/11",
  idNo: "00000000",
  Campus: "MAIN",
  gender: "Male",
  dob: "29/10/1928",
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
        <button className="text-xs-extra custom-orange border-md py-[0.5rem] px-[1rem] mt-10">
          Update Information
        </button>
      </div>
      <ul>
        <li className="border-b border-neutral-300">
          <p>{studentInformation.name}</p>
        </li>
        <li className="border-b border-neutral-300">
          <p>
            <span className="font-semibold">Reg No:</span>
            {studentInformation.regNo}
          </p>
        </li>
        <li className="border-b border-neutral-300">
          <p>
            <span className="font-semibold">ID/Passport:</span>
            {studentInformation.idNo}
          </p>
        </li>
        <li className="border-b border-neutral-300">
          <p>
            <span className="font-semibold">Campus:</span>
            {studentInformation.Campus}
          </p>
        </li>
        <li className="border-b border-neutral-300">
          <p>
            <span className="font-semibold">Gender:</span>
            {studentInformation.gender}
          </p>
        </li>
        <li className="border-b border-neutral-300">
          <p>
            <span className="font-semibold">DOB:</span>
            {studentInformation.dob}
          </p>
        </li>
        <li className="border-b border-neutral-300">
          <p>
            <span className="font-semibold">County:</span>
            {studentInformation.county}
          </p>
        </li>
        <li className="border-b border-neutral-300">
          <p>
            <span className="font-semibold">Nationality:</span>
            {studentInformation.nationality}
          </p>
        </li>
      </ul>
      <UpdateProfileInfo/>
    </div>
  );
};

export default PersonalInformation;
