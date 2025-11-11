import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../Loader/Loader";

const Root = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center mx-auto">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto bg-[#f3feff]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
