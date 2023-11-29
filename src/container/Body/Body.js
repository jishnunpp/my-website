import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import Home from "../Home/Home";

const Body = () => {
  return (
    <div>
      <Header />

      <Outlet/>

      <Footer />
    </div>
  );
};

export default Body;
