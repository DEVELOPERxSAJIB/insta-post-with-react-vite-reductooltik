import { RouterProvider } from "react-router-dom";
import "./App.css";
import publicRouter from "./routers/publicRouter";

function App() {
  return (
    <>
      <RouterProvider router={publicRouter} />
    </>
  );
}

export default App;
