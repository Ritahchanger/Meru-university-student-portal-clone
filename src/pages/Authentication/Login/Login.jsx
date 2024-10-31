import React from "react";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Loading...",
      icon: "success",
      text: "Please wait while we log you in.",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      Swal.close();
      navigate("/");
    }, 2000);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center mb-">
          <img
            src="https://student.must.ac.ke/img/Logo.png"
            alt=""
            className="max-w-[120px] max-h-[120px]"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-[800px] bg-green-500 w-[96%] p-4 rounded-lg shadow-lg"
        >
          <h2 className="text-white text-center border-b border-neutral-100 text-lg font-bold mb-4">
            STUDENT LOGIN
          </h2>
          <div className="mb-4">
            <label
              htmlFor="registration-number"
              className="text-white text-xs-extra"
            >
              Registration Number
            </label>
            <input
              type="text"
              name="registration-number"
              id="registration-number"
              placeholder="Enter your registration number"
              className="w-full p-2 mt-1 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-white text-xs-extra">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 mt-1 rounded-md"
              required
            />
          </div>
          <p className="text-end">
            <a href="#" className="text-xs-extra">
              Reset password?
            </a>
          </p>
          <input
            type="submit"
            value="Login"
            className="custom-orange w-full p-2 rounded-md text-white cursor-pointer"
          />
          <p className="text-xs-extra mt-4 border-t border-neutral-400 py-[0.5rem]">
            Click below to easily access LMS
          </p>
          <input
            type="submit"
            value="LMS(ODEL)"
            className="custom-orange w-full p-2 rounded-md text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
