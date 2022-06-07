import React from "react";

const CreatePost = () => {
  return (
    <div className="bg-gray-800 rounded-lg h-72 font-['rajdhani'] relative">
      <Tabs>
        <Tab title="Status">
          <textarea
            name="status"
            cols="30"
            rows="5"
            className="bg-gray-800 p-2 border-none outline-none tracking-wider resize-none"
            placeholder="Hi Miheer Tamkhane! share your posts here"
          ></textarea>
        </Tab>
        <Tab title="Link">
          <span>Text : </span>
          <input
            type="text"
            className="bg-gray-800 p-2 border border-gray-400 rounded-lg outline-none tracking-wider w-full"
            placeholder="Hi Miheer Tamkhane! share your posts here"
          />
          <span>Link : </span>
          <input
            type="text"
            className="bg-gray-800 p-2 border border-gray-400 rounded-lg outline-none tracking-wider w-full"
            placeholder="Paste link here"
          />
        </Tab>
        <Tab title="Video">
          <span>Text : </span>
          <input
            type="text"
            className="bg-gray-800 p-2 border border-gray-400 rounded-lg outline-none tracking-wider w-full"
            placeholder="Hi Miheer Tamkhane! share your posts here"
          />
          <span>Link : </span>
          <input
            type="text"
            className="bg-gray-800 p-2 border border-gray-400 rounded-lg outline-none tracking-wider w-full"
            placeholder="Paste link here"
          />
        </Tab>
      </Tabs>
      <div>
        <button
          type="button"
          className="focus:outline-none text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:bg-gray-700 dark:focus:ring-gray-700 absolute right-24 bottom-1.5"
        >
          Discard
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center absolute right-6 bottom-1.5"
        >
          Post
        </button>
      </div>
    </div>
  );
};

/* Tab logic */

const style = {
  notSelected: `text-gray-400`,
  default: `py-4 text-center border-gray-800 outline-none cursor-pointer px-4 inline-block text-gray-300 focus:outline-none w-1/3 `,
  selected: `border-b-4 border-lime-400 text-white`,
};

function Tabs({ children }) {
  const childrenArray = React.Children.toArray(children);
  const [current, setCurrent] = React.useState(childrenArray[0].key);

  const newChildren = childrenArray.map((child) =>
    React.cloneElement(child, { selected: child?.key === current })
  );

  return (
    <nav className="">
      {childrenArray.map((child) => (
        <div
          key={child?.key}
          role="link"
          tabIndex={0}
          onClick={() => setCurrent(child?.key)}
          className={`${style.default} ${
            current === child?.key ? style.selected : style.notSelected
          }`}
        >
          {child?.props.title}
        </div>
      ))}
      <section>{newChildren}</section>
    </nav>
  );
}

function Tab({ children, selected }) {
  return (
    <div
      hidden={!selected}
      className="pt-3 px-2 border-t h-44 border-b text-gray-100 border-gray-500"
    >
      {children}
    </div>
  );
}

export { CreatePost };
