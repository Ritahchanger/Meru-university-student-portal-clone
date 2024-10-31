import React from "react";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";

import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";

import { useSelector } from "react-redux";
import Courses from "../../../components/dashboard/student/Courses/Courses";
import UnitsRegistration from "../../../components/dashboard/student/UnitsRegistration/UnitsRegistration";
import ModalUnits from "../../../components/modals/ModalUnits";

import "./CourseRegistration.css"



const CourseRegistration = () => {
  const isSidebarShown = useSelector((state) => state.sidebar.isSidebarShown);
 

  return (
    <div className="graduation-links course">
      <StudentDashNavbar />

      <StudentDashSidebar />

      <div
        className={`main border border-neutral-400 pb-[1rem] ${
          !isSidebarShown ? "mobile" : ""
        }`}
      >
        <div
          className="py-[0.5rem] px-[1rem] custom-orange "
          style={{
            borderTopRightRadius: "7px",
            borderTopLeftRadius: "7px",
          }}
        >
          <p>Course Registration</p>
        </div>
        <div className="flex gap-[20px] px-[1rem] mt-[1rem] flex-col md:flex-row">
          <div className="w-full md:basis-1/2 flex-grow">
            <ul>
              <li className="flex justify-between border border-neutral-400 p-[0.6rem]">
                <p className="font-semibold w-full sm:w-1/2 text-xs-extra">
                  Student No:
                </p>
                <p className="w-full sm:w-1/2 text-xs-extra">CT298/189786/1</p>
              </li>
              <li className="flex justify-between border border-neutral-400 p-[0.6rem]">
                <p className="font-semibold w-full sm:w-1/2 text-xs-extra">
                  Names:
                </p>
                <p className="w-full sm:w-1/2 text-xs-extra">
                  MUNYAO PETER DENNIS
                </p>
              </li>
              <li className="flex justify-between border border-neutral-400 p-[0.6rem]">
                <p className="font-semibold w-full sm:w-1/2 text-xs-extra">
                  Programme
                </p>
                <p className="w-full sm:w-1/2 text-xs-extra">CT201</p>
              </li>
            </ul>
          </div>
          <div className="w-full md:basis-1/2 flex-grow">
            <ul>
              <li className="flex justify-between border border-neutral-400 p-[0.6rem]">
                <p className="font-semibold w-full sm:w-1/2 text-xs-extra">
                  Current University Semester:
                </p>
                <p className="w-full sm:w-1/2 text-xs-extra">CT298/189786/1</p>
              </li>
              <li className="flex justify-between border border-neutral-400 p-[0.6rem]">
                <p className="font-semibold w-full sm:w-1/2 text-xs-extra">
                  E-Mail
                </p>
                <p className="w-full sm:w-1/2 text-xs-extra">
                  peterdennis573@gmail.com
                </p>
              </li>
              
            </ul>
          </div>
        </div>
        <Courses/>
        <UnitsRegistration/>
      </div>

    
    </div>
  );
};

export default CourseRegistration;
