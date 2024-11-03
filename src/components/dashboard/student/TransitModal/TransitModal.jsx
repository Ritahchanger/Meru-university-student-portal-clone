import React from "react";
import "./TransitModal.css";

import { useSelector, useDispatch } from "react-redux";

import { closeTransitModal } from "../../../../store/features/TransitModalSlice";

const TransitModal = () => {
  // Sample data for units
  const units = [
    {
      code: "CCS 3300",
      title: "Design And Analysis of Algorithms",
      units: 1,
      grade: "A",
      remarks: "PASS",
    },
    {
      code: "CCS 3301",
      title: "Database Systems",
      units: 1,
      grade: "B",
      remarks: "PASS",
    },
    {
      code: "CCS 3302",
      title: "Operating Systems",
      units: 1,
      grade: "A",
      remarks: "PASS",
    },
    {
      code: "CCS 3303",
      title: "Computer Networks",
      units: 1,
      grade: "B",
      remarks: "PASS",
    },
    {
      code: "CCS 3304",
      title: "Software Engineering",
      units: 1,
      grade: "A",
      remarks: "PASS",
    },
    {
      code: "CCS 3305",
      title: "Artificial Intelligence",
      units: 1,
      grade: "A",
      remarks: "PASS",
    },
    {
      code: "CCS 3306",
      title: "Machine Learning",
      units: 1,
      grade: "A",
      remarks: "PASS",
    },
    {
      code: "CCS 3307",
      title: "Cybersecurity",
      units: 1,
      grade: "B",
      remarks: "PASS",
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  const isTransitModalShown = useSelector(
    (state) => state.transitModal.isTransitModalShown
  );

  const dispatch = useDispatch();

  const handleCloseTransitModal = () => {
    dispatch(closeTransitModal());
  };

  return (
    <div
      className={`modal transit bg-green-600 ${
        isTransitModalShown ? "active" : null
      }`}
    >
      <div className="modal-wrapper bg-green-600  m-[1rem] border-2 border-green-800 relative">
        <button
          className="fixed top-[1rem] right-[1rem] h-[35px] w-[35px] bg-red-600 text-white text-2xl"
          onClick={handleCloseTransitModal}
        >
          &times;
        </button>
        <div className="inner-wrapper">
          <div className="flex justify-center items-center  mb-[1rem]">
            <img
              src="https://student.must.ac.ke/img/Logo.png"
              className="max-h-[60px] max-w-[60px]"
              alt=""
            />
          </div>
          <div className="div">
            <h3 className="text-center text-black font-semibold text-sm">
              MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY
            </h3>
            <h2 className="text-xl text-center my-3 text-neutral-700">
              SCHOOL OF COMPUTING AND INFORMATICS
            </h2>

            <h2 className="text-center">
              BACHELOR OF SCIENCE COMPUTER SCIENCE
            </h2>

            <div className="grid grid-cols-3 gap-10 border-b border-green-600 text-center bg-green-500 text-white">
              <div>
                <p> Year 1 sem 2</p>
              </div>
              <div>
                <p>Released on 22-may-2024</p>
              </div>
              <div>
                <p>Approved</p>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-start font-semibold">
                  <td className="px-4 py-2 border border-neutral-800">UNIT</td>
                  <td className="px-4 py-2 border border-neutral-800">
                    UNIT TITLE
                  </td>
                  <td className="px-4 py-2 border border-neutral-800">
                    UNIT(S)
                  </td>
                  <td className="px-4 py-2 border border-neutral-800">GRADE</td>
                  <td className="px-4 py-2 border border-neutral-800">
                    REMARKS
                  </td>
                </tr>
              </thead>
              <tbody>
                {units.map((unit, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border border-neutral-800">
                      {unit.code}
                    </td>
                    <td className="px-4 py-2 border border-neutral-800">
                      {unit.title}
                    </td>
                    <td className="px-4 py-2 border border-neutral-800">
                      {unit.units}
                    </td>
                    <td className="px-4 py-2 border border-neutral-800">
                      {unit.grade}
                    </td>
                    <td className="px-4 py-2 border border-neutral-800">
                      {unit.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h2 className="font-semibold underline">
                Key to the grading system:
              </h2>
              <div className="max-w-[300px]">
                <div className="flex justify-between items-center">
                  <span className="w-[60px] block">A</span>
                  {"  "} = {"  "}
                  <span>70% and Above</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="w-[60px] block">B</span>
                  {"  "} = {"  "}
                  <span>60% and Above</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="w-[60px] block">C</span>
                  {"  "} = {"  "}
                  <span>50% and Above</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="w-[60px] block">D</span>
                  {"  "} = {"  "}
                  <span>40% and Above</span>
                </div>
              </div>
            </div>
            <p>
              NB: 1 unit consists of 45 lecture hours equivalent: (3 Practical
              hours or 2 Tutorial hours are equivalent to one lecture hour).
            </p>
            <div className="flex justify-between items-center mt-[1rem]">
              <p className="font-semibold">
                SIGNED .............................................{" "}
              </p>

              <p className="font-semibold">
                Date .......................................................{" "}
              </p>
            </div>
            <h4 className="font-semibold">C.O.D - Computer science</h4>
            <div className="flex justify-between items-center mt-[2rem]">
              <p className="font-semibold">
                SIGNED .............................................{" "}
              </p>

              <p className="font-semibold">
                Date .......................................................{" "}
              </p>
            </div>
            <h4 className="font-semibold">
              Dean - School of Computing and Informatics
            </h4>
          </div>

          <div className=" border-t-2 border-neutral-800 mt-[1rem]">
            <p
              style={{
                fontFamily: "fantasy",
              }}
            >
              <strong>Note</strong> This result slip is not a transcript. Meru
              University of Science and Technology reserves the right to correct
              the information given on the result slip, which will be confirmed
              by the issue of a transcript after successful completion of the
              academic year.
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="px-3 py-1 bg-green-900 text-white mt-4"
          >
            PRINT TRANSCRIPT
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransitModal;
