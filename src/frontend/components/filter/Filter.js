import React from "react";

const Filter = () => {
  return (
    <aside className="w-72">
      <div className="overflow-y-auto p-4 text-white bg-gray-50 dark:bg-gray-800 mx-auto rounded-lg">
        <h3>Sort By</h3>
        <div>
          <button
            type="button"
            className="mt-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 w-full"
          >
            Trending
          </button>
          <label
            htmlFor="countries"
            className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-base"
          >
            <option className="p-2 text-base">Sort by Date</option>
            <option className="p-2 text-base" value="NF">
              Newest First
            </option>
            <option className="p-2 text-base" value="OF">
              Oldest First
            </option>
          </select>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <div className="p-2 flex w-full items-center relative border rounded border-gray-500">
            <img
              src="/assets/male.jpg"
              className="mr-2 rounded-full h-10 w-10"
              alt="Otakusurf user"
            />
            <div className="flex flex-col">
              <span className="text-lg tracking-wide font-['jost']">
                Username
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-3 py-1 rounded dark:bg-purple-200 dark:text-purple-900 absolute right-0 bottom-4 cursor-pointer">
                Follow
              </span>
            </div>
          </div>
          <div className="p-2 flex w-full items-center relative border rounded border-gray-500">
            <img
              src="/assets/male.jpg"
              className="mr-2 rounded-full h-10 w-10"
              alt="Otakusurf user"
            />
            <div className="flex flex-col">
              <span className="text-lg tracking-wide font-['jost']">
                Username
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-3 py-1 rounded dark:bg-purple-200 dark:text-purple-900 absolute right-0 bottom-4 cursor-pointer">
                Follow
              </span>
            </div>
          </div>
          <div className="p-2 flex w-full items-center relative border rounded border-gray-500">
            <img
              src="/assets/male.jpg"
              className="mr-2 rounded-full h-10 w-10"
              alt="Otakusurf user"
            />
            <div className="flex flex-col">
              <span className="text-lg tracking-wide font-['jost']">
                Username
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-3 py-1 rounded dark:bg-purple-200 dark:text-purple-900 absolute right-0 bottom-4 cursor-pointer">
                Follow
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export { Filter };