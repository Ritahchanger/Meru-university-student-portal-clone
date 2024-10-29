import AssetsExporter from "../../../../Assets/AssetsExport";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./StudentDashNavbar.css";
import { FaEllipsisH } from "react-icons/fa";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleSidebar } from "../../../../store/features/SidebarSlice";
const StudentDashNavbar = () => {
  const dispatch = useDispatch();

  const handleSidebarToggling = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Fragment>
      <div className="navbar">
        <div className="container">
          <div className="left-card desktop">
            <img
              src="https://student.must.ac.ke/img/Logo.png"
              className="icon-image"
              alt=""
            />
            <div className="toggle-menu desktop">
              <button
                className="menu-icon desktop"
                onClick={handleSidebarToggling}
              >
                &#9776;
              </button>
            </div>
          </div>

          {/* mobile navigation */}

          <div className="left-card mobile">
            <div className="toggle-menu">
              <button
                className="menu-icon left"
                onClick={handleSidebarToggling}
              >
                &#9776;
              </button>
            </div>
            <img
              src="https://student.must.ac.ke/img/Logo.png"
              className="icon-image"
              alt=""
            />
            <div className="toggle-menu">
              <button className="menu-icon right">
                <span>
                  <FaEllipsisH />
                </span>
              </button>
            </div>
          </div>

          {/* mobile navigation */}

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
                <RiArrowDropDownLine />
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
