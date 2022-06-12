import React from "react";
import { Navbar, Sidebar, Filter } from "../../components";
export const HomePage = ({ page }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="mx-16 mt-6 bg-gray-900 flex justify-center maxmd:mx-2 ">
        <div className="maxxlmd:absolute maxxlmd:-left-full">
          <Sidebar />
        </div>
        <div className="mx-6 h-full w-1/2 overflow-scroll scrollbar-hide maxxlmd:w-full maxmd:mx-4 rounded-lg">
          {page}
        </div>
        <div className="maxmidmd:hidden">
          {page.type.name !== "ProfilePage" && <Filter />}
        </div>
      </div>
    </div>
  );
};
