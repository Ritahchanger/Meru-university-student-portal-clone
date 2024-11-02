import React from "react";
import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";
import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";
import { useSelector } from "react-redux";

import "./LecturerEvaluation.css"

const LecturesEvaluation = () => {
  const isSidebarShown = useSelector((state) => state.sidebar.isSidebarShown);

  const lectures = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    unit: `NLP ${index + 1}`,
    description: `Description for NLP ${index + 1}`,
  }));

  return (
    <div className="lecturers-evaluation">
      <StudentDashNavbar />
      <StudentDashSidebar />
      <div
        className={`main border border-neutral-400 pb-[1rem] border-r-4 ${
          !isSidebarShown ? "mobile" : ""
        }`}
      >
        <div className="py-[0.5rem] px-[1rem] custom-orange sub-header">
          <p>Lecturer Evaluation</p>
        </div>

        <div className="p-[1rem] ">
          <button className="px-4 py-1 border bg-neutral-200 text-neutral-400 border-neutral-500">
            Evaluate Unit Selected
          </button>
        </div>

        <div className="p-[1rem]">
          <table className="w-full">
            <thead className="bg-blue-500">
              <tr className="text-sm text-white">
                <td className="px-4 py-2  border border-neutral-300">Select</td>
                <td className="px-4 py-2  border border-neutral-300">Unit</td>
                <td className="px-4 py-2  border border-neutral-300">
                  Description
                </td>
              </tr>
            </thead>
            <tbody>
              {lectures.map((lecture) => (
                <tr className="text-sm" key={lecture.id}>
                  <td className="px-4 py-2  border border-neutral-300">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2  border border-neutral-300">
                    {lecture.unit}
                  </td>
                  <td className="px-4 py-2  border border-neutral-300">
                    {lecture.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LecturesEvaluation;
