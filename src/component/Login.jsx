import React from 'react'
function Login() {
   
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen  px-4 ">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h1>
          <form  className="flex flex-col gap-5">
           
            <div className='text-start'>
              <label className=" text-black mb-1">Email:</label>
              <input
                type="email"
                className="w-full p-3 border rounded-md "
                placeholder="Enter your email"
                
              />
            </div>
  
            
            <div className='text-start'>
              <label className=" text-black mb-2">Password:</label>
              <input
                type="password"
                className="w-full p-3 border rounded-md "
                placeholder="Enter your password"
               
              />
            </div>
  
            <p className="text-red-500 text-sm hidden">Invalid email or password</p>
  
           
            <button
             
              className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-700 "
            >
              Login
            </button>
  
        
            <div className="text-center">
              <a href="/" className="text-cyan-700 ">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;