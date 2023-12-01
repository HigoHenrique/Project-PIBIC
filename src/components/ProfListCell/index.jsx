import React from "react";
import "./styles.css";

import UserIcon from "../../assets/user.png"

export default function ProfListCell({ professor }) {
  return (
    <div id="container">
        <div  className="imgContainer">
            <img src={UserIcon} />
        </div>

      <div id="nameContainer" className="fieldContainer">
        <p id="name">{professor.nome}</p>
        <p id="email">{professor.email}</p>
      </div>
      <div className="fieldContainer">
        <p>Matricula: </p>
        <p> {professor.matricula}</p>
      </div>
      <div className="fieldContainer">
        <p>Curso: </p>
        <p>{professor.curso}</p>
      </div>
    </div>
  );
}
