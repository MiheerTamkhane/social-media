import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { signupThunk } from "../../features";
const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const signupHandler = async (userDetails) => {
    const res = await dispatch(signupThunk(userDetails));
    if (res?.payload?.encodedToken) {
      localStorage.setItem("authToken", res.payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(res.payload.createdUser));
      toast.success("Signin successfully!");
      setUserDetails({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      });
      navigate(from, { replace: true });
    }
  };
  return (
    <div className="p-6 rounded-lg shadow-lg bg-gray-900  flex flex-col items-center ">
      <h1 className="text-2xl mb-4 font-bold font-rajdhani text-gray-300 tracking-widest">
        Create Your Account
      </h1>
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          signupHandler(userDetails);
        }}
      >
        <div className="form-group mb-6">
          <label
            htmlFor="firstname"
            className="form-label inline-block mb-2 text-gray-300"
          >
            First Name
          </label>
          <input
            value={userDetails.firstName}
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstName: e.target.value })
            }
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
    border border-solid border-purple-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
            id="firstname"
            aria-describedby="emailHelp"
            placeholder="First Name"
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="lastname"
            className="form-label inline-block mb-2 text-gray-300"
          >
            Last Name
          </label>
          <input
            value={userDetails.lastName}
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastName: e.target.value })
            }
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
            id="lastname"
            aria-describedby="emailHelp"
            placeholder="Last Name"
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
            value={userDetails.username}
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
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
            placeholder="Username"
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="password"
            className="form-label inline-block mb-2 text-gray-300"
          >
            Password
          </label>
          <input
            value={userDetails.password}
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
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
            id="password"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-80 text-white hover:bg-purple-800 outline-none ring-2 ring-purple-700 rounded-md text-lg px-8 py-2  
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
