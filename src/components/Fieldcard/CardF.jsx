import React from "react";
import "../Fieldcard/CardF.css";

function CardF(props) {
  let point = props.points;
  return (
    <div className="CardF">
      <h1 className="fieldheads1">{props.title}</h1>
      <br />
      <div className="li">
        {point.map((p) => {
          return <li>{p}</li>;
        })}
      </div>
    </div>
  );
}
export default CardF;
