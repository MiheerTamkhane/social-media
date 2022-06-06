import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { loginThunk } from "../../features";
const Login = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const loginHandler = async (userDeatils) => {
    const res = await dispatch(loginThunk(userDeatils));
    if (res?.payload?.encodedToken) {
      localStorage.setItem("authToken", res.payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(res.payload.foundUser));
    }
    setUserDetails({
      username: "",
      password: "",
    });
    toast.success("Logged in successfully!");
    navigate(from, { replace: true });
  };
  return (
    <div className="w-5/6 p-6 rounded-lg shadow-lg bg-gray-900  flex flex-col items-center">
      <h1 className="text-2xl mb-4 font-bold font-rajdhani text-gray-300 tracking-widest">
        Account Login
      </h1>
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(userDetails);
        }}
      >
        {/* */}
        <div className="form-group mb-6">
          <label
            htmlFor="username"
            className="form-label inline-block mb-2 text-gray-300"
          >
            Username
          </label>
          <input
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
            value={userDetails.username}
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            value={userDetails.password}
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="checkbox"
            />
            <label
              className="form-check-label inline-block text-gray-300"
              htmlFor="checkbox"
            >
              Remember me
            </label>
          </div>
          <a
            href="#!"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full text-white hover:bg-purple-800 outline-none ring-2 ring-purple-700 rounded-md text-lg px-8 py-2  
                dark:bg-purple-600
               dark:focus:ring-purple-600 dark:border-purple-600 transition-all font-bold"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => {
            loginHandler({ username: "miheer", password: "miheer@123" });
          }}
          className="w-full mt-3 text-white hover:bg-gray-800 outline-none ring-2 ring-gray-700 rounded-md text-lg px-8 py-2  
                dark:bg-gray-600
               dark:focus:ring-gray-600 dark:border-gray-600 transition-all font-bold"
        >
          Login as guest
        </button>

        <div className="flex justify-center items-center flex-wrap space-x-2 mt-6">
          {/* Discord  */}
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 ring-indigo-300  active:shadow-lg transition duration-150 ease-in-out"
            style={{ backgroundColor: "#7289da" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
              />
            </svg>
          </button>
          {/* Google  */}
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg outline-none focus:ring-2 ring-red-400 active:shadow-lg transition duration-150 ease-in-out"
            style={{ backgroundColor: "#ea4335" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
          </button>
          {/* Twitter */}
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 ring-blue-400 active:shadow-lg transition duration-150 ease-in-out"
            style={{ backgroundColor: "#1da1f2" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export { Login };
