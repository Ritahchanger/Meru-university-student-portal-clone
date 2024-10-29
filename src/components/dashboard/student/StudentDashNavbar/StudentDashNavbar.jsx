import AssetsExporter from "../../../../Assets/AssetsExport";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./StudentDashNavbar.css";
import { Fragment } from "react";
const StudentDashNavbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <div className="container">
          <div className="left-card">
            <img
              src="https://student.must.ac.ke/img/Logo.png"
              className="icon-image"
              alt=""
            />
            <div className="toggle-menu">
              <button className="menu-icon">&#9776;</button>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-icon mr-[1rem]">
              <img
                src={AssetsExporter.profileIcon}
                className="icon-image"
                alt=""
              />
            </div>

            <p className="text-sm tracking-wider">ABIGAIL ALEX |</p>
            <div className="dropdown">
              <span>
                <RiArrowDropDownLine/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          height: "50px",
        }}
      ></p>
    </Fragment>
  );
};

export default StudentDashNavbar;
