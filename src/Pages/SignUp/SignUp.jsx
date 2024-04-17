import React, { useState } from "react";
import bro from "../../Images/bro.png";
import vector from "../../Images/Vector.png";
import validator from "validator";
function SignUp() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (validator.isEmail(newEmail)) {
      setEmailError("");
    } else {
      setEmailError("The email entered is not correct");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError(
        "Your password is not strong enough. Use atleast 8 characters"
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="left w-1/2 bg-[#4BCBEB] h-full px-[200px] pt-[100px] ">
        <div className="flex items-center">
          <img src={vector} alt="Logo" className="mr-2" />
          <span>
            <h2 className="text-2xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>

        <img src={bro} />
      </div>
      <div className="right w-1/2  h-full pt-[100px] ">
        <div className="flex flex-col mx-[100px] ">
          <h5 className="font-bold  pb-8 text-2xl">Sign Up for an Account</h5>
          <input
            id="fullName"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Enter Your Full Name"
            required
          />

          <input
            id="email"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded mt-4"
            type="email"
            placeholder="Email"
            value={email}
            onChnage={handleEmailChange}
            required
          />

          <input
            id="password"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded my-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {emailError && (
            <div className="text-red-500 text-xs mt-1">{emailError}</div>
          )}
          <div className="text-sm text-[#64748B] font-normal">
            Your password must have atleast 8 characters
          </div>
          {passwordError && (
            <div className="text-red-500 text-xs mt-1">{passwordError}</div>
          )}
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1 mb-5" type="checkbox" required />
              <span>
                By creating an account means you agree to the
                <strong>
                  Terms <br />
                  and Conditions
                </strong>
                and our
                <strong> Privacy Policy</strong>
              </span>
            </label>
          </div>
          <div className="text-center md:text-left">
            <button
              className="bg-[#4BCBEB] mt-4 px-4 py-4 font-bold w-4/5   px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              SignUp
            </button>
          </div>
          <div className="mt-8 mx-[70px] mx-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account?
            <span>
              <button
                className="text-[#4BCBEB] pl-1 font-[900] text-lg  "
                href="#"
              >
                Log In
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
