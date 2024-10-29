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
        <div className="outer-grid">
          <PersonalInformation />
          <div className="center-container">
            <div className="grid">
              <div className="card-2">
                <h3 className="subtitle font-semibold text-sm">
                  Units Registered (current sem)
                </h3>
                <p className="units border-t border-neutral-400">8</p>
              </div>
              <div className="card-2">
                <h3 className="subtitle font-semibold text-sm">
                  Units Registered (previous sem)
                </h3>
                <p className="units border-t border-neutral-400">43</p>
              </div>
              <div className="card-2">
                <WifiInformation />
              </div>
              <div className="card-2">
                <FeeStatement />
              </div>
            </div>
          </div>
          <ContactInformation />
        </div>
        <div className=" my-[1.5rem] mr-[1.5rem] ml-[1.5rem] custom-shadow p-[1rem]">
          <p className="text-sm font-semibold py-[1rem] border-b border-neutral-300">
            More about Eduroam
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <div className="video-responsive w-full sm:w-1/2">
              <iframe
                src="https://www.youtube.com/embed/SROWWjrSqUk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-responsive w-full sm:w-1/2">
              <iframe
                src="https://www.youtube.com/embed/SROWWjrSqUk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
