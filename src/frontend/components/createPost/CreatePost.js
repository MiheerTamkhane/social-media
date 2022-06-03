import React from "react";

const CreatePost = () => {
  return (
    <div className="bg-gray-800 rounded-lg h-72 font-['rajdhani'] relative">
      <Tabs>
        <Tab title="Status">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="bg-gray-800 p-2 border-none outline-none tracking-wider"
            placeholder="Hi Miheer Tamkhane! share your posts here"
          ></textarea>
        </Tab>
        <Tab title="Link">
          The React Framework for Production Next.js gives you the best
          developer experience with all the features you need for production:
          hybrid static & server rendering, TypeScript support, smart bundling,
          route pre-fetching, and more. No config needed.
        </Tab>
        <Tab title="Video">
          The Intuitive Vue Framework Build your next Vue.js application with
          confidence using NuxtJS. An open source framework making web
          development simple and powerful.
        </Tab>
      </Tabs>
      <div>
        <button
          type="button"
          class="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 absolute right-24 bottom-0"
        >
          Discard
        </button>
        <button
          type="button"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 absolute right-6 bottom-0"
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
  selected: `border-b-2 border-lime-500 text-white`,
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
          role="link"
          tabIndex={0}
          onClick={() => setCurrent(child?.key)}
          key={child?.key}
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
