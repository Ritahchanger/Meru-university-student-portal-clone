const contactInformation = {
  phoneNo: "0113174493",
  studentEmail: "munyaopeter@students.must.ac.ke",
};
const ContactInformation = () => {
  return (
    <div className="contact-information">
      <div className="p-[1rem] custom-shadow">
        <h3 className="subtitle">Contact Information</h3>
        <div className="border border-neutral-300">
          <div className="p-3 border-b border-neutral-400">
            <p className="text-neutral-700">
              Phone No:<span>0113174493</span>
            </p>
          </div>
          <div className="p-3 border-b border-neutral-400">
            <p className="text-neutral-700">Other Contact Information</p>
          </div>
          <div className="p-3 border-b border-neutral-400">
            <p className="text-neutral-700">
              <span className="text-neutral-900">
                Other Contact Information
              </span>
            </p>
            <p className="text-sm text-neutral-400 my-2">
              Default password is your student number
            </p>
          </div>
          <div className="p-3 border-b border-neutral-400">
            <p className="text-neutral-900">Postal Address()</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
