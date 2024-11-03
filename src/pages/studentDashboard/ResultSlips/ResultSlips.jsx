import React from "react";
import { useSelector } from "react-redux";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";
import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";
import TransitModal from "../../../components/dashboard/student/TransitModal/TransitModal";

import { openTransitModal } from "../../../store/features/TransitModalSlice";

import { useDispatch } from "react-redux";
import Preloader from "../../../components/preloader/Preloader";

import {
  openPreloaderSlice,
  closePreloaderSlice,
} from "../../../store/features/preloaderSlice";

const ResultSlips = () => {
  const isSidebarShown = useSelector((state) => state.sidebar.isSidebarShown);

  const resultSlips = [
    { academicYear: "1", semester: "1", year: "2021" },
    { academicYear: "1", semester: "2", year: "2021" },
    { academicYear: "2", semester: "1", year: "2022" },
    { academicYear: "2", semester: "2", year: "2022" },
    { academicYear: "3", semester: "1", year: "2023" },
    { academicYear: "3", semester: "2", year: "2023" },
  ];

  const dispatch = useDispatch();

  const handleOpenTransitModal = () => {
    dispatch(openPreloaderSlice());
    setTimeout(() => {
      dispatch(closePreloaderSlice());
      dispatch(openTransitModal(null));
    }, 1000);
  };

  const isPreloaderSliceShown = useSelector(
    (state) => state.preloader.isPreloaderSliceShown
  );

  return (
    <div className="graduation-links">
      <StudentDashNavbar />
      <StudentDashSidebar />

      <div
        className={`main border border-neutral-400 pb-[1rem] ${
          !isSidebarShown ? "mobile" : ""
        }`}
      >
        <div className="py-[0.5rem] px-[1rem] custom-orange sub-header">
          <p>Student Reports</p>
        </div>

        <div className="p-[1rem]">
          <table className="w-full">
            <thead>
              <tr>
                <td className="px-4 py-2 border border-neutral-300">View</td>
                <td className="px-4 py-2 border border-neutral-300">
                  Academic Year
                </td>
                <td className="px-4 py-2 border border-neutral-300">
                  Semester
                </td>
                <td className="px-4 py-2 border border-neutral-300">Year</td>
              </tr>
            </thead>
            <tbody>
              {resultSlips.map((slip, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-neutral-300">
                    <button
                      className="py-1 px-3 text-white bg-green-500 hover:bg-green-700 transition-all"
                      onClick={handleOpenTransitModal}
                    >
                      view
                    </button>
                  </td>
                  <td className="px-4 py-2 border border-neutral-300">
                    {slip.academicYear}
                  </td>
                  <td className="px-4 py-2 border border-neutral-300">
                    {slip.semester}
                  </td>
                  <td className="px-4 py-2 border border-neutral-300">
                    {slip.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <TransitModal />

      <Preloader />
    </div>
  );
};

export default ResultSlips;
