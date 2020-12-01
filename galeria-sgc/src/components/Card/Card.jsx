import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" style={{ width: "18em" }}>
      <img src={props.url} alt={props.alt} class="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.descricao}</p>
      </div>
    </div>
  );
}

export default Card;
