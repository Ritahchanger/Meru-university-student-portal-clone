import AssetsExporter from "../../../../Assets/AssetsExport";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
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
            <div className="profile-icon">
              <img
                src={AssetsExporter.profileIcon}
                className="icon-image"
                alt=""
              />
            </div>

            <p className="username">ABIGAIL ALEX |</p>
            <div className="dropdown">
              <span>
                <MdOutlineArrowDropDownCircle />
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
