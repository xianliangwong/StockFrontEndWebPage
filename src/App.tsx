import { Outlet } from "react-router";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Compoments/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Compoments/Context/useAuth";

function App() {
  return (
    <>
      <UserProvider>
        <NavBar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
