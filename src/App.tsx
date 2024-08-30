import { Outlet } from "react-router";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Compoments/NavBar/NavBar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
