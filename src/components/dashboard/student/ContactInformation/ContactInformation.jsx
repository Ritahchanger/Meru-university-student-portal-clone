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
      <div className="p-[1rem] custom-shadow mt-[10px]">
        <p>Quick Help and Links</p>
        <div className="border border-neutral-400">
          <div className="border-b border-neutral-400 p-[1rem]">
            <p className="text-neutral-400 text-sm">FAQ</p>
          </div>
          <div className="border-b border-neutral-400 p-[1rem]">
            <p className="text-neutral-400 text-sm">
              Academic requisitions guide
            </p>
          </div>
          <div className="border-b border-neutral-400 p-[1rem]">
            <p className="text-neutral-400 text-sm">
              How Do I register for Units
            </p>
          </div>
          <div className="border-b border-neutral-400 p-[1rem]">
            <p className="text-neutral-400 text-sm">
              Lecturer Evaluation Guide
            </p>
          </div>
          <div className="border-b border-neutral-400 p-[1rem]">
            <p className="text-neutral-400 text-sm">Change of Course Guide</p>
          </div>
          <div className="border-b border-neutral-400 p-[1rem]">
            <p className="text-neutral-400 text-sm">LMS(Online Learning)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
