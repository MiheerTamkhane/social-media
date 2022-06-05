import { useState } from "react";
import { Login, Signup } from "../../components";
import "./RegisterPage.css";
import bgImg from "./bgimg.jpg";
const RegisterPage = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div className="register-page">
      <img src={bgImg} className="bg-img" alt="bg-img" />
      <div className="register-container">
        <div className="register-content w-3/5">
          <div className="register-div w-4/5 p-4">
            <h3>WELCOME TO</h3>
            <h1 className="text-purple-700">OtakuSurf</h1>
            <p className="text-base">
              The next generation otakus only social network & community!
              Connect with your friends and fellow anime fans. chat, share
              posts, videos, earn badges and more!. Giving otakus quick
              electronic communication of content.
            </p>
          </div>
          <div className="register-btns">
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
        <div className="form-container w-2/5">
          {flag ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export { RegisterPage };
