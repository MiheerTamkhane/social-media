import React from "react";
import { Sidebar, Filter } from "../../components";
export const HomePage = ({ page }) => {
  return (
    <div className="mt-6 bg-gray-900 flex gap-4 justify-center max-w-full h-screen">
      <div className="maxmidmd:hidden">
        <Sidebar />
      </div>
      <div className="max-w-mdTwo w-mdTwo flex justify-center overflow-scroll scrollbar-hide">
        <div className="">{page}</div>
      </div>
      <div className={`maxmd:w-full maxmd:mb-4 maxmd:hidden`}>
        <Filter />
      </div>
    </div>
  );
};

/*


 <div className="relative">
      <Navbar />
      <div className="mx-12 mt-6 bg-gray-900 flex justify-center maxmd:mx-6">
        <div className="maxmidmd:hidden">
          <Sidebar />
        </div>
        <div className="h-screen maxmd:mx-6 rounded-lg flex">
          <div className="mx-6 maxmd:mx-0 overflow-scroll scrollbar-hide rounded-lg">
            {page}
          </div>

          <div className={`maxmd:w-full maxmd:mb-4 maxmd:hidden`}>
            <Filter />
          </div>
        </div>
      </div>
    </div>

*/
