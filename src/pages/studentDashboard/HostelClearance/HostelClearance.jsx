import React from "react";

import StudentDashNavbar from "../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar";

import StudentDashSidebar from "../../../components/dashboard/student/StudentDashSidebar/StudentDashSidebar";

import { useSelector } from "react-redux";

const HostelClearance = () => {
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
          <p>Hostel Booking</p>
        </div>

        <div className="flex gap-5 flex-wrap m-[1rem] pb-[1rem] border-b  border-neutral-400">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">
            Print Hostel Invoice
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">
            Hostel clearance Request
          </button>
        </div>
        <div className="p-[1rem]">
          <p className="font-semibold text-sm">Booked Hostel Details</p>

          <div>
            <div className="flex justify-between items-center border border-neutral-300 p-[0.5rem]">
              <div className="min-w-[160px]">
                <p>Student No</p>
              </div>
              <div>
                <p>CT20X/xxxxx/xx</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center border border-neutral-300 p-[0.5rem] mt-4">
              <div className="min-w-[160px]">
                <p>Semester</p>
              </div>
              <div>
                <p>SEMxxxxxxx</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center border border-neutral-300 p-[0.5rem] mt-4">
              <div className="min-w-[160px]">
                <p>Hostel Booked</p>
              </div>
              <div>
                <p>Hostel_XXXX</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center border border-neutral-300 p-[0.5rem] mt-4">
              <div className="min-w-[160px]">
                <p>Room Number</p>
              </div>
              <div>
                <p>XXXX</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center border border-neutral-300 p-[0.5rem] mt-4">
              <div className="min-w-[160px]">
                <p>Space Number</p>
              </div>
              <div>
                <p>XXXX</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center border border-neutral-300 p-[0.5rem] mt-4">
              <div className="min-w-[160px]">
                <p>Accomodation Fee</p>
              </div>
              <div>
                <p>XXXX.Sh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelClearance;
