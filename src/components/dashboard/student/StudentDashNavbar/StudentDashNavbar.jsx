import AssetsExporter from "../../../../Assets/AssetsExport";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./StudentDashNavbar.css";
import { FaEllipsisH } from "react-icons/fa";
import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { useState } from "react";

import { Link } from "react-router-dom";

import { FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { toggleSidebar } from "../../../../store/features/SidebarSlice";
const StudentDashNavbar = () => {
  const dispatch = useDispatch();

  const handleSidebarToggling = () => {
    dispatch(toggleSidebar());
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
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

          <div className="profile-card relative " onClick={toggleDropdown}>
            <div className="profile-icon mr-[1rem]">
              <img
                src={AssetsExporter.profileIcon}
                className="icon-image"
                alt=""
              />
            </div>

            <p className="text-xs-extra tracking-wider">DENNIS PETER |</p>
            <div className="dropdown">
              <span>
                <RiArrowDropDownLine />
              </span>
            </div>

            {isDropdownVisible && (
              <div className="absolute top-[100%] bg-white w-[250px] custom-shadow right-[2rem]">
                <div className="triangle-up" />
                <ul>
                  <li className="flex items-center cursor-pointer hover:bg-green-500 hover:text-white transition-all h-[40px]">
                    <Link
                      to="/"
                      className="flex p-2 items-end h-full text-xs-extra w-full"
                    >
                      {" "}
                      <FaTachometerAlt className="mr-2" /> Dashboard
                    </Link>
                  </li>
                  <li className="flex items-center p-2 cursor-pointer hover:bg-green-500 hover:text-white transition-all h-[40px]">
                    <Link
                      to="/auth/login"
                      className="flex p-2 items-center h-full text-xs-extra w-full"
                    >
                      <FaSignOutAlt className="mr-2" /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
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
