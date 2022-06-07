import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import React from "react";

const App = () => {
  return (
    <>
      <Toaster position="bottom-center" />
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
