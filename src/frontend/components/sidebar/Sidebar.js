import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <aside className="w-72">
      <div className="overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800 mx-auto rounded-lg">
        <div className="flex items-center pl-2.5 mb-5 ">
          <img
            src={user?.avatarURL || "/assets/male.jpg"}
            className="mr-2 rounded-full h-14 w-14"
            alt={`${user?.username}-avatar`}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            {user?.username || "Username"}
          </span>
        </div>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-300 bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <svg
                className="h-5 fill-gray-400  text-white"
                viewBox="0 0 22 22"
              >
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g
                    id="ic_fluent_broad_activity_feed_24_filled"
                    fillRule="nonzero"
                  >
                    <path d="M9.24605887,14.0013796 C10.2125572,14.0013796 10.9960589,14.7848813 10.9960589,15.7513796 L10.9960589,19.2513796 C10.9960589,20.217878 10.2125572,21.0013796 9.24605887,21.0013796 L3.75,21.0013796 C2.78350169,21.0013796 2,20.217878 2,19.2513796 L2,15.7513796 C2,14.7848813 2.78350169,14.0013796 3.75,14.0013796 L9.24605887,14.0013796 Z M20.25,14.0013796 C21.2164983,14.0013796 22,14.7848813 22,15.7513796 L22,19.2513796 C22,20.217878 21.2164983,21.0013796 20.25,21.0013796 L14.7539411,21.0013796 C13.7874428,21.0013796 13.0039411,20.217878 13.0039411,19.2513796 L13.0039411,15.7513796 C13.0039411,14.7848813 13.7874428,14.0013796 14.7539411,14.0013796 L20.25,14.0013796 Z M20.25,2.99621328 C21.2164983,2.99621328 22,3.77971496 22,4.74621328 L22,10.2496456 C22,11.216144 21.2164983,11.9996456 20.25,11.9996456 L3.75,11.9996456 C2.78350169,11.9996456 2,11.216144 2,10.2496456 L2,4.74621328 C2,3.82803988 2.70711027,3.07502094 3.60647279,3.00201447 L3.75,2.99621328 L20.25,2.99621328 Z"></path>
                  </g>
                </g>
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">Feed</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-300 bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <svg
                viewBox="0 0 489.713 489.713"
                className="h-5 fill-gray-400  text-white"
              >
                <g>
                  <path
                    d="M483.4,454.444l-121.3-121.4c28.7-35.2,46-80,46-128.9c0-112.5-91.5-204.1-204.1-204.1S0,91.644,0,204.144
		s91.5,204,204.1,204c48.8,0,93.7-17.3,128.9-46l121.3,121.3c8.3,8.3,20.9,8.3,29.2,0S491.8,462.744,483.4,454.444z M40.7,204.144
		c0-90.1,73.2-163.3,163.3-163.3s163.4,73.3,163.4,163.4s-73.3,163.4-163.4,163.4S40.7,294.244,40.7,204.144z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">Explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-300 bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 fill-gray-400  text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 2C5.44772 2 5 2.44772 5 3V20.5925C5 21.4516 6.01192 21.9108 6.6585 21.345L10.0245 18.3998C11.1556 17.4101 12.8444 17.4101 13.9755 18.3998L17.3415 21.345C17.9881 21.9108 19 21.4516 19 20.5925V3C19 2.44772 18.5523 2 18 2H6ZM3 3C3 1.34315 4.34315 0 6 0H18C19.6569 0 21 1.34315 21 3V20.5925C21 23.1699 17.9642 24.5475 16.0245 22.8502L12.6585 19.905C12.2815 19.5751 11.7185 19.5751 11.3415 19.905L7.97551 22.8502C6.03576 24.5475 3 23.1699 3 20.5925V3Z"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Bookmarks</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`/profile/${user?.username}`}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-300 bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};
