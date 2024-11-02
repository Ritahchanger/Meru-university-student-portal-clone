import React from "react";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";

import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";

import { useSelector } from "react-redux";

const IndustrialAttachment = () => {
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
        <div className="py-[0.5rem] px-[1rem] custom-orange custom-orange sub-header">
          <p>Industrial Attachment List</p>
        </div>

        <div className="p-[1rem] border-b border-neutral-300">
          <button className="bg-red-400 rounded-md px-4 py-2 text-white">
            New Requisition
          </button>
        </div>

        <div className="p-[1rem]">
          <table className="w-full">
            <thead className="bg-green-700">
              <tr className="text-sm text-white">
                <td className="p-[0.5rem]">Company</td>
                <td className="p-[0.5rem]">Phone Number</td>
                <td className="p-[0.5rem]">Email</td>
                <td className="p-[0.5rem]">Location</td>
                <td className="p-[0.5rem]">Lecturer Name</td>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="p-[0.5rem] border border-neutral-300">Google</td>
                <td className="p-[0.5rem] border border-neutral-300">
                  01XXXXXXXX
                </td>
                <td className="p-[0.5rem] border border-neutral-300">
                  email@gmail.com
                </td>
                <td className="p-[0.5rem] border border-neutral-300">
                  Nairobi
                </td>
                <td className="p-[0.5rem] border border-neutral-300">
                  XXXXXXXXXX
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndustrialAttachment;
