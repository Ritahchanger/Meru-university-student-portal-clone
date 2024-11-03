import React from "react";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";

import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";

import { useSelector } from "react-redux";
import TransitModal from "../../../components/dashboard/student/TransitModal/TransitModal";

const ResultSlips = () => {
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
        <div className="py-[0.5rem] px-[1rem] custom-orange  sub-header">
          <p>Student Reports</p>
        </div>

        <div className="p-[1rem]">
          <table className="w-full">
            <thead>
              <tr>
                <td className="px-4 py-2  border border-neutral-300">View</td>
                <td className="px-4 py-2  border border-neutral-300">
                  Academic Year
                </td>
                <td className="px-4 py-2  border border-neutral-300">
                  Semester
                </td>
                <td className="px-4 py-2  border border-neutral-300">Year</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2  border border-neutral-300">
                  <button className="py-1 px-3 text-white bg-green-500 hover:bg-green-700 transition-all">
                    view
                  </button>
                </td>
                <td className="px-4 py-2  border border-neutral-300">1</td>
                <td className="px-4 py-2  border border-neutral-300">1</td>
                <td className="px-4 py-2  border border-neutral-300">2021</td>
              </tr>
              <tr>
                <td className="px-4 py-2  border border-neutral-300">
                  <button className="py-1 px-3 text-white bg-green-500 hover:bg-green-700 transition-all">
                    view
                  </button>
                </td>
                <td className="px-4 py-2  border border-neutral-300">1</td>
                <td className="px-4 py-2  border border-neutral-300">2</td>
                <td className="px-4 py-2  border border-neutral-300">2021</td>
              </tr>
              <tr>
                <td className="px-4 py-2  border border-neutral-300">
                  <button className="py-1 px-3 text-white bg-green-500 hover:bg-green-700 transition-all">
                    view
                  </button>
                </td>
                <td className="px-4 py-2  border border-neutral-300">2</td>
                <td className="px-4 py-2  border border-neutral-300">1</td>
                <td className="px-4 py-2  border border-neutral-300">2022</td>
              </tr>
              <tr>
                <td className="px-4 py-2  border border-neutral-300">
                  <button className="py-1 px-3 text-white bg-green-500 hover:bg-green-700 transition-all">
                    view
                  </button>
                </td>
                <td className="px-4 py-2  border border-neutral-300">2</td>
                <td className="px-4 py-2  border border-neutral-300">2</td>
                <td className="px-4 py-2  border border-neutral-300">2022</td>
              </tr>
              <tr>
                <td className="px-4 py-2  border border-neutral-300">
                  <button className="py-1 px-3 text-white bg-green-500 hover:bg-green-700 transition-all">
                    view
                  </button>
                </td>
                <td className="px-4 py-2  border border-neutral-300">3</td>
                <td className="px-4 py-2  border border-neutral-300">1</td>
                <td className="px-4 py-2  border border-neutral-300">2023</td>
              </tr>
              <tr>
                <td className="px-4 py-2  border border-neutral-300">
                  <button className="py-1 px-3 text-white bg-green-500 hover:bg-green-700 transition-all">
                    view
                  </button>
                </td>
                <td className="px-4 py-2  border border-neutral-300">3</td>
                <td className="px-4 py-2  border border-neutral-300">2</td>
                <td className="px-4 py-2  border border-neutral-300">2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <TransitModal/>
    </div>
  );
};

export default ResultSlips;
