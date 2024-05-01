import React, { useState } from "react";
// import bro from "../../images/bro.png";
// import vector from "../../images/Vector.png";
import updatepass from "../../Images/updatepass.png";
function Updatepass() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordError("Your password is not strong enough.");
    } else {
      setPasswordError("");
    }
  };
  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="left w-1/2 bg-[#4BCBEB] h-auto px-[100px] pt-[100px] bg-[  rgba(255, 255, 255, 0.06)]">
        <div className="flex items-center">
         
        </div>
        <img src={updatepass} />
      </div>
      <div className="right w-1/2  h-full pt-[100px]   ">
        <div className="flex flex-col mx-[100px]">
          <h5 className="mb-3 font-bold text-3xl text-center ">
            Reset Password
          </h5>
          <p className="text-[#64748B] font-[Poppins] ">
            To set a new password, please enter your new password below. Make
            sure it's secure, containing a combination of letters, numbers, and
            special characters.
          </p>
         
        
          <input
            id="password"
            className="text-sm w-[90%] px-4 py-4 border border-solid border-gray-300 rounded my-4"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            id="confirm password"
            className="text-sm w-[90%] px-4 py-4 border border-solid border-gray-300 rounded my-4"
            type="password"
            placeholder="Confirm Your new Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <div className="text-center md:text-left">
            <button
              className="mt-4 px-4 py-4 w-[90%] bg-[#4BCBEB]   text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Update
            </button>
           
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default Updatepass;