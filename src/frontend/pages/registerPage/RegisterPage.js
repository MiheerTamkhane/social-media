import { useState } from "react";
import { Login, Signup } from "../../components";
// import "./RegisterPage.css";
const RegisterPage = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div className="max-h-full register-page bg-register-bg bg-center bg-cover bg-no-repeat text-white maxmd:flex maxmd:flex-col flex items-center py-6">
      <div className=" w-3/5 maxmd:w-full flex flex-col items-center">
        <div className="register-div w-4/5 p-4 maxmd:w-full maxmd:p-2 maxmd:my-4 text-center ">
          <h1 className="text-2xl">WELCOME TO</h1>
          <h1 className="text-purple-600 drop-shadow-2xl text-8xl font-bold maxmd:text-6xl  my-2 font-['rajdhani']">
            OtakuSurf
          </h1>
          <p className="text-base">
            The next generation otakus only social network & community! Connect
            with your friends and fellow anime fans. chat, share posts, videos,
            earn badges and more!. Giving otakus quick electronic communication
            of content.
          </p>
        </div>
        <div>
          <button
            type="button"
            className={`text-white hover:bg-gray-900 outline-none ring-2 ring-gray-700 rounded-md text-lg px-8 py-2.5 mr-2 mb-2   ${
              flag && "dark:bg-gray-700"
            } dark:focus:ring-gray-700 dark:border-gray-700 transition-all font-bold`}
            onClick={() => setFlag(true)}
          >
            Login
          </button>
          <button
            type="button"
            className={`text-white hover:bg-gray-900 outline-none ring-2 ring-gray-700 rounded-md text-lg px-8 py-2.5 mr-2 mb-2   ${
              !flag && "dark:bg-gray-700"
            } dark:focus:ring-gray-700 dark:border-gray-700 transition-all font-bold`}
            onClick={() => setFlag(false)}
          >
            SignUp
          </button>
        </div>
      </div>
      <div className="maxmd:w-full maxmd:flex maxmd:justify-center">
        {flag ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export { RegisterPage };
