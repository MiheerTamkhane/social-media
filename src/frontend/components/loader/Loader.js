import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  zIndex: "999",
};

const Loader = () => {
  return (
    <div className="w-full h-fit mx-44 maxmd:mx-36">
      <PuffLoader
        color={"rgb(124 58 237)"}
        loading={true}
        cssOverride={override}
        size={245}
      />
    </div>
  );
};

export { Loader };
