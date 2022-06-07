import "./style.css";
import { useState, useEffect } from "react";
import Card from "../Card";
import React from "react";

const Home = () => {

  const [palettes, setPalettes] = useState([]);


  const getPalettes = async () => {
    const response = await fetch("http://localhost:8080/paletas/listar-todas");
    const palettesList = await response.json();

    console.log("Fez requisição");
    setPalettes(palettesList);
  };


  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <div className="home-container">
      <h2>Lista de Paletas</h2>
      <div>
        {palettes.map((element) => {
          return <Card key={element._id} palette={element} />;
        })}
      </div>
    </div>
  );
};

export default Home;
