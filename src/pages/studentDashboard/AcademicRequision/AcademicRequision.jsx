import React from "react";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";

import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";

import { useSelector } from "react-redux";

const AcademicRequisition = () => {
  const isSidebarShown = useSelector((state) => state.sidebar.isSidebarShown);

  return (
    <div className="graduation-links">
      <StudentDashNavbar />
      <StudentDashSidebar />
      <div
        className={`main border border-neutral-400 pb-[1rem] border-r-4 ${
          !isSidebarShown ? "mobile" : ""
        }`}
      >
        <div className="py-[0.5rem] px-[1rem] custom-orange sub-header">
          <p>Academic Requisition List </p>
        </div>

        <div className="flex gap-5 flex-wrap m-[1rem] pb-[1rem] border-b bg-gray-200 border-neutral-400">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">
            New Requisition
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Send Approval Request
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Cancel Approval Request
          </button>
          <button className="px-4 py-2 custom-orange text-green-600 rounded-md">
            View Approval Status
          </button>
        </div>
        <div className="bg-white p-[1rem]">
          <p className="text-neutral-400">Academic Requisitions</p>

          <div className="border border-neutral-300">
            <p>No Academic Requisition History Found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicRequisition;
