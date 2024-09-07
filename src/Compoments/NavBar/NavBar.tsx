import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

interface Props {}

const NavBar = (props: Props) => {
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() === true ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkblue space-x-2">
              Welcome, <a className="px-2">{user?.userName}</a>
            </div>
            <div className="hover:text-darkBlue">
              <a className="hover:cursor-pointer" onClick={logout}>
                Log Out
              </a>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">
              <Link to="/login">Login</Link>
            </div>
            <a
              href=""
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              <Link to="/register">Sign Up</Link>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
