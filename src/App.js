import { MyRoutes } from "./frontend/routes/MyRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="app bg-gray-900 h-max">
      <MyRoutes />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgb(109 40 217)",
            color: "rgb(237 233 254)",
          },
        }}
      />
    </div>
  );
}

export default App;
