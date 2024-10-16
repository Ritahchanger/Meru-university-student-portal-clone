import React from "react";

import { Link } from "react-router-dom";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";
import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";

const Home = () => {
  return (
    <div className="home">
      <StudentDashNavbar />

      <StudentDashSidebar />
    </div>
  );
};

export default Home;
