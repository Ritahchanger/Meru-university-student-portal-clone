import React from "react";

import { Link } from "react-router-dom";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";
import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";

const Home = () => {
  return (
    <div className="home">
      <StudentDashNavbar />
      <StudentDashSidebar />
      <div className="main">
        <div className="personal-information">
          <h3 className="subtitle">Personal Information</h3>
        </div>
        <div className="center-container">
          <div className="card">
            <h3 className="subtitle">Personal Information</h3>
          </div>
          <div className="card">
            <h3 className="subtitle">Units Registered (previous Sems)</h3>
          </div>
        </div>
        <div className="contact-information">
          <h3 className="subtitle">Contact Information</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
