const WifiInformation = () => {
  return (
    <>
      <h3 className="subtitle mb-2 border-b border-neutral-400">
        Wifi information
      </h3>
      <div className="border border-neutral-400 text-sm">
        <div className="border-b border-neutral-400 p-[1rem] ">
          <p className="text-neutral-700">Wifi Username</p>
          <p className="text-neutral-900">munyaopeter@students.must.ac.ke</p>
        </div>
        <div className="border-b border-neutral-400 p-[1rem]">
          <p className="text-neutral-700">
            Wifi Username:
            <span className="font-semibold text-neutral-900">pbkmdkedfw4</span>
          </p>
        </div>
        <div className="border-b border-neutral-400 p-[1rem]">
          <p className="text-neutral-700">How to connect to Student Eduroam</p>
        </div>
        <div className="border-b border-neutral-400 p-[1rem]">
          <p className="text-neutral-700">CA Certificate</p>
        </div>
        <div className="border-b border-neutral-400 p-[1rem]">
          <p className="text-neutral-700">More information about Eduroam</p>
        </div>
      </div>
    </>
  );
};

export default WifiInformation;
