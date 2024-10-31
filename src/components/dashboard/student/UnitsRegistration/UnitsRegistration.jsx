import Swal from "sweetalert2";
import ModalUnits from "../../../modals/ModalUnits";

import { useDispatch } from "react-redux";

import { showUnitsRegistrationModal } from "../../../../store/features/UnitsRegistrationSlice";

const UnitsRegistration = () => {

    const dispatch = useDispatch()

    const handleShowUnitsRegistrationModal = () =>{
  
      dispatch(showUnitsRegistrationModal(null))
  
    }

  const handleGetUnits = () => {
    const regType = document.querySelector('select[name="regType"]').value;
    if (!regType) {
      Swal.fire({
        icon: "warning",
        title: "Registration Type Required",
        text: "Please choose a registration type before proceeding.",
        confirmButtonText: "Okay",
      });
    } else {
      handleShowUnitsRegistrationModal()
    }
  };

  return (
    <div className="p-[1rem]">
      <h3 className="subtitle font-semibold text-sm underline">
        UNITS REGISTRATION
      </h3>
      <div className="px-[1rem] py-[0.6rem] bg-blue-500 rounded-md">
        <a href="#" className="text-xs-extra">
          Having Trouble with Unit Registration? Click Here to View How to
        </a>
      </div>

      <p className="text-sm my-[1rem]">
        Registration Semester: {""}
        <span className="text-green-600">SEM1-2024/2025</span>
      </p>

      <p className="text-red-500 mb-[0.5rem] text-sm">
        To register for unit(s), Choose "Registration Type" then Click on the
        button "Get Units to Register". After you submit your unit(s), Confirm
        then Complete registration by clicking button "Complete Registration"
      </p>

      <div className="flex items-center flex-col md:flex-row w-full md:w-auto gap-4 mb-1rem border-b border-neutral-300 pb-[2rem]">
        <select
          name="regType"
          id="#"
          className="bg-transparent text-sm border-b border-neutral-400 h-[40px] text-neutral-600 w-full md:w-1/2"
        >
          <option value="">--Registration Type--</option>
          <option value="units">Units Registration</option>
        </select>
        <button
          className="text-sm py-[0.6rem] px-[1rem] bg-red-500 rounded-md text-white mt-[1rem] md:mt-0"
          onClick={handleGetUnits}
        >
          Get Units To Register
        </button>
      </div>

      <button className="text-sm py-[0.6rem] px-[1rem] bg-red-500 rounded-md text-white mt-[1rem]">
        Complete Registration
      </button>
      <p className="my-2 text-neutral-400 text-sm">
        Selected Units for Registration
      </p>
      <p className="p-[0.5rem] border border-neutral-300 text-xs-extra">
        NO SELECTED UNITS FOUND
      </p>
      
      <ModalUnits/>
    </div>
  );
};

export default UnitsRegistration;
