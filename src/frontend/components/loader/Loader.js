import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "2rem auto",
  zIndex: "999",
};

const Loader = () => {
  return (
    <div className="w-full h-fit mx-44 maxmd:mx-36">
      <ClipLoader
        color={"rgb(124 58 237)"}
        loading={true}
        cssOverride={override}
        size={50}
      />
    </div>
  );
};

export { Loader };
