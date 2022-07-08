import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  zIndex: "999",
};

const Loader = () => {
  return (
    <div className="w-100">
      <PuffLoader
        color={"rgb(124 58 237)"}
        loading={true}
        cssOverride={override}
        size={200}
      />
    </div>
  );
};

export { Loader };
