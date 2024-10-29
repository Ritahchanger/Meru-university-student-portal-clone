import React from "react";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";

import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";

import { useSelector } from "react-redux";

const GraduationLink = () => {
  const isSidebarShown = useSelector((state) => state.sidebar.isSidebarShown);

  return (
    <div className="graduation-links">
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
          <p>11th Graduation Ceremony live stream Links</p>
        </div>

        <div className="mx-[1rem] p-[1rem] bg-blue-300 border border-blue-400  mt-5">
          <p className="text-xs-extra rounded-sm">
            To Apply for graduation Click on the "Graduation Request" link on
            the sidebar menu. Only Approved students will be able to see this
            link
          </p>
        </div>
        <div className="m-[1rem] pb-[1rem] border-b border-neutral-400">
          <p className="text-xs-extra">
            <a
              href="https://www.facebook.com/MeruUniversity/videos/3540978916047344"
              target="_blank"
              className="text-xs-extra bg-blue-500 text-white px-[1rem] py-[0.5rem] rounded-md inline-block"
            >
              Watch The 11th Graduation Ceremony On Facebook Live
            </a>{" "}
            {""}
            or copy
            https://www.facebook.com/MeruUniversity/videos/3540978916047344
          </p>
        </div>
        <div className="m-[1rem] pb-[1rem] border-b border-neutral-400">
          <p className="text-xs-extra">
            <a
              href="https://www.youtube.com/watch?v=aIo-6KWRlh4"
              target="_blank"
              className="text-xs-extra bg-pink-600 text-white px-[1rem] py-[0.5rem] rounded-md inline-block"
            >
              Watch The 11th Graduation Stream On Youtube
            </a>{" "}
            {""}
            or copy https://www.youtube.com/watch?v=aIo-6KWRlh4
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraduationLink;
