import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import api from "./api";

const App = () => {
  const [palettes, setPalettes] = useState([]);


  const getPalettes = async () => {
    const response = await api.get("/paletas/listar-todas");

    setPalettes(response.data);
  };


  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      <Header getPalettes={getPalettes} />
      <Home palettes={palettes} getPalettes={getPalettes} />
      <Footer />
    </>
  );
};

export default App;
