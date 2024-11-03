import AssetsExporter from "../../../../Assets/AssetsExport";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./StudentDashNavbar.css";
import { FaEllipsisH } from "react-icons/fa";
import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import { FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { toggleSidebar } from "../../../../store/features/SidebarSlice";
const StudentDashNavbar = () => {
  const dispatch = useDispatch();

  const [regType, setRegType] = useState("");

  const [showProfileCard, setShowProfileCard] = useState(false);

  const handleSidebarToggling = () => {
    dispatch(toggleSidebar());
  };

  const handleProfileCard = () => {
    setShowProfileCard((prev) => !prev);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };



  return (
    <Fragment>
      <div className="navbar">
        <div className="container relative">
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
              <button
                className="menu-icon right cursor-pointer"
                onClick={handleProfileCard}
              >
                <span>
                  <FaEllipsisH />
                </span>
              </button>
            </div>
          </div>

          {/* mobile navigation */}

          <div
            className={`profile-card border-b border-green-700 relative ${
              showProfileCard ? "active " : ""
            }`}
            onClick={toggleDropdown}
          >
            <div className="profile-icon mr-[1rem]">
              <img
                src={AssetsExporter.profileIcon}
                className="icon-image"
                alt=""
              />
            </div>

            <p className="text-xs-extra tracking-wider profile-name desktop">
              DENNIS PETER |
            </p>

            <p className="text-xs-extra tracking-wider profile-name mobile">
              DENNIS PETER
            </p>

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
                      className="flex p-2 items-end h-full text-sm w-full"
                    >
                      {" "}
                      <FaTachometerAlt className="mr-2" /> Dashboard
                    </Link>
                  </li>
                  <li className="flex items-center  cursor-pointer hover:bg-green-500 hover:text-white transition-all h-[40px]">
                    <Link
                      to="/auth/login"
                      className="flex p-2 items-center h-full w-full "
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
