import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Feed } from "../feed/Feed";
const Main = () => {
  return (
    <div className="mx-16 mt-6 bg-gray-100 flex maxmd:mx-2">
      <div className="maxmd:hidden">
        <Sidebar />
      </div>
      <div className="mx-4 h-screen w-2/3 overflow-scroll scrollbar-hide maxmd:w-full maxmd:mx-0 rounded-lg">
        <Feed />
      </div>
    </div>
  );
};

export { Main };
