const FeeStatement = () => {
  return (
    <>
      <h3 className="subtitle pb-[1rem] border-b border-neutral-400 font-semibold text-sm">
        Fee payment
      </h3>
      <div className="pb-[1rem] border-b border-neutral-400">
        <div className="custom-orange px-[1rem] py-[0.5rem]">
          <p className="text-sm">
            <span className="text-neutral-900 font-semibold">Total Billed</span>{" "}
            = Ksh.186,800.00
          </p>
        </div>
        <div className="bg-green-500  px-[1rem] py-[0.5rem]">
          <p className="text-sm">
            <span className="text-neutral-900 font-semibold">Total Paid</span> =
            Ksh.186,800.00
          </p>
        </div>
        <div className="custom-orange px-[1rem] py-[0.5rem]">
          <p className="text-sm">
            <span className="text-neutral-900 font-semibold">Fee Balance</span>{" "}
            = Ksh.186,800.00
          </p>
        </div>
        <div className="mt-[1rem] pt-[1rem] border-t border-neutral-400 flex justify-between items-center sm:flex-col">
          <div>
            <a
              href="#"
              className="h-[40px] text-white px-[1rem] flex justify-center items-center bg-blue-400 text-xs-extra rounded-sm"
            >
              View Fee Statement
            </a>
          </div>
          <div>
            <a
              href="#"
              className="h-[40px]  text-white px-[1rem] flex justify-center items-center bg-blue-400 text-xs-extra rounded-sd "
            >
              View Payment Receipts
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeStatement;
