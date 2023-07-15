import React from "react";
import Navbar from "../components/Navbar";
import HomeScreen from "./HomeScreen";
import Footer from "../components/Footer";

const MainScreen = () => {
  return (
    <div className="relative w-screen h-screen">
      <img
        className="fixed w-screen h-screen"
        src="https://images.unsplash.com/photo-1682686581295-7364cabf5511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="absolute z-50">
        <Navbar />
        <HomeScreen />
        <Footer />
      </div>
    </div>
  );
};

export default MainScreen;
