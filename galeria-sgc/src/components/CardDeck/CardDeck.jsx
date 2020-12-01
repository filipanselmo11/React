import React from "react";
import Card from "../Card/Card";
import "./CardDeck.css";

function CardDeck(props) {
  const listaItems = props.listaImagens.map((item, index) => (
    <Card key={index} url={item.url} titulo={item.titulo} descricao={item.descricao} alt={item.alt} />
  ));
  return (
    <div className="container mt-5">
      <div className="card-deck">{listaItems}</div>
    </div>
  );
}

export default CardDeck;
