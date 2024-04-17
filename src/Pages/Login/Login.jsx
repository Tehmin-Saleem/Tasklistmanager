import React, { useState } from "react";
import bro from "../../Images/bro.png";
import vector from "../../Images/Vector.png"
function Login() {
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
      <div className="left w-1/2 bg-blue-700 h-full px-[200px] pt-[100px] bg-[  rgba(255, 255, 255, 0.06)]">
      <div className="flex items-center">
  <img src={vector} alt="Logo" className="mr-2" />
  <span>
    <h2 className="text-3xl font-bold text-white">Task Manager List</h2>
  </span>
</div>

        <img src={bro} />
      </div>
      <div className="right w-1/2  h-full pt-[100px] ">
        <div className="flex flex-col mx-[100px]">
          <h5>Sign Up for an Account</h5>
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
              className="mt-4 px-4 py-4 w-4/5 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              SignUp
            </button>
          </div>
          <div className="mt-8 mx-[70px] mx-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account?
            <span>
              <a
                className="text-red-600 hover:underline hover:underline-offset-4"
                href="#"
              >
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
