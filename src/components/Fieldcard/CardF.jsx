import React from "react";
import "../Fieldcard/CardF.css";

function CardF(props) {
  let point = props.points;
  return (
    <div className="CardF">
      <h1 className="fieldheads1">{props.title}</h1>
      <div className="li">
        {point.map((p, index) => {
          return <li>{p}</li>;
        })}
      </div>
      ;
    </div>
  );
}
export default CardF;
