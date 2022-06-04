import React from "react";
import "./Post.css";
const Post = () => {
  return (
    <div className="h-fit min-h-96 rounded-lg bg-gray-800 text-white">
      <div className="p-2 ml-4 flex w-full items-center">
        <img
          src="/assets/male.jpg"
          className="mr-1 rounded-full h-10 w-10"
          alt="Otakusurf user"
        />
        <div className="flex flex-col">
          <span className="text-lg tracking-wide font-['jost']">Username</span>
          <span className="text-xs text-gray-400">3 months ago</span>
        </div>
      </div>
      <div className="h-48 border-b border-t border-gray-500  overflow-scroll scrollbar-hide px-6 pt-2 text-left text-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
        aliquam quo distinctio voluptas perspiciatis, nostrum id cupiditate in
        corporis vitae maxime ut unde, cum doloremque tempore quaerat ullam
        earum eaque repellendus dignissimos? Nemo corrupti quod provident
        inventore ab est incidunt labore porro adipisci odit quidem eaque ullam
        vitae fuga dignissimos impedit consequuntur voluptate consequatur modi
        quaerat, vel velit repudiandae eum necessitatibus. Repudiandae quod eius
        nemo ex nisi totam minus ipsa Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tempore, velit adipisci. Voluptatem, similique eos nam
        nesciunt numquam enim quam ut illo, ducimus distinctio recusandae
        veritatis et magni consequatur corrupti nisi? minima molestias
        voluptate. Ipsum laborum, sint tempora ullam cumque reprehenderit modi
        exercitationem repellat repudiandae distinctio provident hic animi,
        dignissimos magnam molestias eligendi fugit odio saepe dolor recusandae
        asperiores impedit reiciendis?
      </div>
      <div className="p-3 w-full flex justify-around">
        <button
          className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300
         focus:bg-gray-700 
        "
        >
          <svg
            className="h-5 mr-2 fill-gray-400  text-white svg-change"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.4568 4.04112C13.9465 3.89532 13.4071 4.14932 13.1944 4.63551L11.4182 8.6953C11.1189 9.37937 10.6332 10.0666 10.0591 10.6315C9.73613 10.9494 9.36405 11.2492 8.95658 11.4895C8.98513 11.6556 9 11.8262 9 12V18.7208C10.9662 19.2191 12.4652 19.4974 13.8747 19.5744C15.4555 19.6609 16.9683 19.4962 18.9391 19.0527C19.666 18.8891 20.238 18.2957 20.3907 17.5321L21.541 11.781C21.6647 11.1622 21.1914 10.5849 20.5604 10.5849H16.6805C15.4446 10.5849 14.5045 9.47514 14.7077 8.25607L15.2112 5.23469C15.2999 4.70287 14.9752 4.18923 14.4568 4.04112ZM8.50064 20.6575C10.5273 21.1716 12.1718 21.4844 13.7655 21.5715C15.5816 21.6707 17.2858 21.4748 19.3783 21.0039C20.9084 20.6595 22.0509 19.4293 22.3519 17.9244L23.5021 12.1732C23.8734 10.3168 22.4535 8.58487 20.5604 8.58487L16.6805 8.58487L17.184 5.56349C17.4399 4.02832 16.5027 2.54563 15.0062 2.11807C13.5333 1.69722 11.9761 2.4304 11.362 3.83387L9.58589 7.89366C9.39928 8.3202 9.0685 8.80035 8.65628 9.20602C8.43074 9.42798 8.20006 9.6089 7.97781 9.74442C7.45036 9.28166 6.75828 9 6 9H3C1.34315 9 0 10.3431 0 12V19C0 20.6569 1.34315 22 3 22H6C7.04478 22 7.96357 21.4664 8.50064 20.6575ZM3 11C2.44772 11 2 11.4477 2 12V19C2 19.5523 2.44772 20 3 20H6C6.46838 20 6.86381 19.677 6.97116 19.2404C6.98984 19.1644 7 19.0841 7 19V12C7 11.8064 6.946 11.6286 6.85273 11.4771C6.67511 11.1887 6.35916 11 6 11H3Z"
            />
          </svg>
          Like
        </button>
        <button className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 focus:bg-gray-700 ">
          <svg
            viewBox="0 0 32 32"
            className="h-5 mr-2 fill-gray-400  text-white svg-change"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <g id="Chat">
              <path d="M24,17H8a1,1,0,0,0,0,2H24a1,1,0,0,0,0-2Z" />
              <path d="M24,7H8A1,1,0,0,0,8,9H24a1,1,0,0,0,0-2Z" />
              <path d="M24,12H8a1,1,0,0,0,0,2H24a1,1,0,0,0,0-2Z" />
              <path d="M25,2H7A5,5,0,0,0,2,7V27.11a3,3,0,0,0,3,3,3,3,0,0,0,1.75-.56l6.81-4.87A3,3,0,0,1,15.45,24H25a5,5,0,0,0,5-5V7A5,5,0,0,0,25,2Zm3,17a3,3,0,0,1-3,3H15.45a4.94,4.94,0,0,0-3.11,1.09L5.58,27.92a1,1,0,0,1-1,.08A1,1,0,0,1,4,27.11V7A3,3,0,0,1,7,4H25a3,3,0,0,1,3,3Z" />
            </g>
          </svg>
          Comment
        </button>
        <button className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 focus:bg-gray-700 ">
          <svg
            viewBox="0 0 24 24"
            className="h-5 mr-2 fill-gray-400  text-white svg-change"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 2C5.44772 2 5 2.44772 5 3V20.5925C5 21.4516 6.01192 21.9108 6.6585 21.345L10.0245 18.3998C11.1556 17.4101 12.8444 17.4101 13.9755 18.3998L17.3415 21.345C17.9881 21.9108 19 21.4516 19 20.5925V3C19 2.44772 18.5523 2 18 2H6ZM3 3C3 1.34315 4.34315 0 6 0H18C19.6569 0 21 1.34315 21 3V20.5925C21 23.1699 17.9642 24.5475 16.0245 22.8502L12.6585 19.905C12.2815 19.5751 11.7185 19.5751 11.3415 19.905L7.97551 22.8502C6.03576 24.5475 3 23.1699 3 20.5925V3Z"
            />
          </svg>
          Bookmark
        </button>
      </div>
    </div>
  );
};

export { Post };
