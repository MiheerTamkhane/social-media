import React from "react";

const Signup = () => {
  return (
    <div className="p-6 w-5/6 rounded-lg shadow-lg bg-gray-900  flex flex-col items-center">
      <h1 className="text-2xl mb-4 font-bold font-rajdhani text-gray-300 tracking-widest">
        Create Your Account
      </h1>
      <form className="w-full">
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail2"
            className="form-label inline-block mb-2 text-gray-300"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="name"
            className="form-label inline-block mb-2 text-gray-300"
          >
            Your Name
          </label>
          <input
            type="text"
            className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="username"
            className="form-label inline-block mb-2 text-gray-300"
          >
            Username
          </label>
          <input
            type="text"
            className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label inline-block mb-2 text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
            id="exampleInputPassword2"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex justify-center">
            <div>
              <div className="form-check">
                <input
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="radio"
                  id="male-radio"
                />
                <label
                  className="form-check-label inline-block text-gray-300"
                  htmlFor="male-radio"
                >
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="radio"
                  id="radio-female"
                />
                <label
                  className="form-check-label inline-block text-gray-300"
                  htmlFor="radio-female"
                >
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white hover:bg-purple-800 outline-none ring-2 ring-purple-700 rounded-md text-lg px-8 py-2  
            dark:bg-purple-600
           dark:focus:ring-purple-600 dark:border-purple-600 transition-all font-bold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export { Signup };
