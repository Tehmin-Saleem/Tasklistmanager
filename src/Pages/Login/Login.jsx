import React from "react";

function Login() {
  return (
    <>
      <div className="left w-50">
        <h3>Task Manager List</h3>
      </div>
      <div className="right w-50 ">
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/3 max-w-sm">
            <img src="Vector.png" />
          </div>
          <div className="md:w-1/3 max-w-sm">
            <div className="text-center md:text-left">
              <label className="mr-1">Sign Up for an Account</label>
            </div>
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Enter Your Full Name"
            />
            <div />
            <div>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
            />
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />

                <span>
                  <p className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4">
                    By creating an account means you agree to the
                    <strong>
                      Terms <br />
                      and Conditions
                    </strong>
                    and our
                    <strong> Privacy Policy</strong>
                  </p>
                </span>
              </label>
            </div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                SignUp
              </button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
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
        </section>
      </div>
    </>
  );
}

export default Login;
