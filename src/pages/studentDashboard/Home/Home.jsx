import React from "react";

import { Link } from "react-router-dom";

import "./Home.css";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";
import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";
import PersonalInformation from "../../../components/dashboard/student/PersonalInformation/PersonalInformation";
import ContactInformation from "../../../components/dashboard/student/ContactInformation/ContactInformation";
import WifiInformation from "../../../components/dashboard/student/WifiInformation/WifiInformation";
import FeeStatement from "../../../components/dashboard/student/FeeStatement/FeeStatement";

const Home = () => {
  return (
    <div className="home">
      <StudentDashNavbar />
      <StudentDashSidebar />
      <div className="main">
        <PersonalInformation />
        <div className="center-container">
          <div className="grid">
            <div className="card-2">
              <h3 className="subtitle">Units Registered (current sem)</h3>
              <p className="units">8</p>
            </div>
            <div className="card-2">
              <h3 className="subtitle">Units Registered (previous sem)</h3>
              <p className="units">43</p>
            </div>
            <div className="card-2">
              <WifiInformation />
            </div>
            <div className="card-2">
             <FeeStatement/>
            </div>
          </div>
        </div>
        <ContactInformation />
      </div>
    </div>
  );
};

export default Home;
