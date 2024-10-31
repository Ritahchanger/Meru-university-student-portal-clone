import "./modalUnits.css";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { hideUnitsRegistrationSlice } from "../../store/features/UnitsRegistrationSlice";

const dummyUnits = Array.from({ length: 20 }, (_, index) => ({
  unitName: `Unit Name ${index + 1}`,
  unitCode: `Code ${index + 1}`,
  department: `Department ${Math.floor(Math.random() * 5) + 1}`, 
}));

const ModalUnits = () => {

  const dispatch = useDispatch();

  const  isRegistrationModalShown = useSelector((state)=>state.registrationSlice.isRegistrationModalShown)

  const handeUnitsRegistrationModal = () =>{
    dispatch(hideUnitsRegistrationSlice())
  }
  return (
    <div className={`modal ${isRegistrationModalShown ? 'active' : null}`}>
      <div className="modal-wrapper">
        <h3 className="text-center text-orange-500 font-semibold pb-[0.3rem] border-b border-orange-500">
          SELECT UNITS TO DO
        </h3>
        <div className="modal-inner mt-2">
          <table className="w-full border-collapse">
            <thead className="bg-black">
              <tr className="text-xs-extra text-white ">
                <td className="px-4 py-2 ">Select</td>
                <td className="px-4 py-2 ">Unit Name</td>
                <td className="px-4 py-2 ">Unit Code</td>
                <td className="px-4 py-2  ">Department</td>
              </tr>
            </thead>
            <tbody>
              {dummyUnits.map((unit, index) => (
                <tr key={index} className="hover:bg-gray-100 text-xs-extra">
                  <td className="px-4 py-2 border border-neutral-300">
                    <input type="checkbox" name="" id="" />
                  </td>

                  <td className="px-4 py-2 border border-neutral-300">
                    {unit.unitName}
                  </td>
                  <td className="px-4 py-2 border border-neutral-300">
                    {unit.unitCode}
                  </td>
                  <td className="px-4 py-2 border border-neutral-300">
                    {unit.department}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex">
            <button className="text-sm py-[0.3rem] px-[2rem] bg-green-700 rounded-sm text-white mt-[1rem]" onClick={handeUnitsRegistrationModal}>
              Done
            </button>
            <button className="text-sm py-[0.3rem] px-[2rem] bg-red-700 rounded-sm text-white mt-[1rem] ml-[1rem]" onClick={handeUnitsRegistrationModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUnits;
