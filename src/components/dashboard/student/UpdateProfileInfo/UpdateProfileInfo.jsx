import CountySelect from "../CountySelect/CountySelect";
import EthnicitySelect from "../EthnicitySelect/EthnicitySelect";

const UpdateProfileInfo = ({ setEditProfile }) => {
  return (
    <div className="modal">
      <div
        className="modal-wrapper"
        style={{
          height: "calc(100vh - 50px)",
        }}
      >
        <div className="bg custom-orange text-black p-[1rem]">
          <p>General information update</p>
        </div>
        <div>
          <div className="flex  flex-col sm:flex-row justify-between gap-[8px]">
            <div className="w-full sm:w-1/2 mt-[0.5rem]">
              <p>Ethnicity</p>
              <EthnicitySelect />
            </div>
            <div className="w-full sm:w-1/2 mt-[0.5rem]">
              <p>Gender</p>
              <select name="gender" id="" className="w-full h-[40px]">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between flex-col sm:flex-row gap-[8px]">
            <div className="w-full sm:w-1/2 mt-[0.5rem]">
              <p>County</p>
              <CountySelect />
            </div>
            <div className="w-full sm:w-1/2 mt-[0.5rem]">
              <p>Date of Birth</p>
              <input
                type="date"
                name="#"
                id=""
                className="w-full border h-[40px] border-neutral-400 p-[8px] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="mt-[2rem]">
            <p>ID Number</p>
            <input
              type="text"
              placeholder="Enter your id no."
              className="border border-neutral-400 w-full p-[8px] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="mt-[1rem]">
          <button
            className="py-1 px-4 bg-green-500 text-white uppercase rounded-sm hover:bg-transparent border-2 border-green-500 hover:text-green-500 transition-[0.5s] "
            onClick={() => {
              setEditProfile((prev) => !prev);
            }}
          >
            submit
          </button>
          <button
            className="py-1 px-4 bg-red-500 text-white uppercase rounded-sm ml-2 hover:bg-transparent border-2 border-red-500 hover:text-red-500 transition-[0.5s] "
            onClick={() => {
              setEditProfile((prev) => !prev);
            }}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileInfo;
