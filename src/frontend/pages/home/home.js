import React from "react";
import { Navbar, Sidebar, Feed, Filter, Profile } from "../../components";

const Home = ({ page }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-16 mt-6 bg-gray-900 flex justify-center maxmd:mx-2">
        <div className="maxxlmd:hidden">
          <Sidebar />
        </div>
        <div className="mx-6 h-screen w-1/2 overflow-scroll scrollbar-hide maxxlmd:w-full maxmd:mx-4 rounded-lg">
          {page}
        </div>
        <div className="maxmidmd:hidden ">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export { Home };
