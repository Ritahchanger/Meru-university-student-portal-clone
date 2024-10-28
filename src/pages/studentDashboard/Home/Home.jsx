import React from "react";

import { Link } from "react-router-dom";

import "./Home.css";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";
import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";
import PersonalInformation from "../../../components/dashboard/student/PersonalInformation/PersonalInformation";
import ContactInformation from "../../../components/dashboard/student/ContactInformation/ContactInformation";

const Home = () => {
  return (
    <div className="home">
      <StudentDashNavbar />
      <StudentDashSidebar />
      <div className="main">
       <PersonalInformation/>
        <div className="center-container">
          <div className="grid">
            <div className="card-2">
              <h3 className="subtitle">Units Registered (current sem)</h3>
            </div>
            <div className="card-2">
              <h3 className="subtitle">Units Registered (previous sem)</h3>
            </div>
            <div className="card-2">
              <h3 className="subtitle">Wifi information</h3>
            </div>
            <div className="card-2">
              <h3 className="subtitle">Fee payment</h3>
            </div>
          </div>
        </div>
        <ContactInformation/>
      </div>
    </div>
  );
};

export default Home;
