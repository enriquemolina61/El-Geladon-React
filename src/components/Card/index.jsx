import "./style.css";
import { toast } from "react-hot-toast";
import React from "react";

const Card = ({ palette }) => {
  return (
    <div className="card-container">
      <div>
        <p>{`R$${palette.preco.toFixed(2)}`}</p>
        <img src={palette.foto} alt={`Paleta sabor ${palette.sabor}`} />
      </div>
      <h3>{palette.sabor}</h3>
      <p>{palette.descricao}</p>
      <button onClick={() => toast.error("Área em desenvolvimento")}>
        Adicionar
      </button>
    </div>
  );
};

export default Card;
