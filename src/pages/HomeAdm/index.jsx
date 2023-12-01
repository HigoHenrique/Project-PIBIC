import React, { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ProfListCell from "../../components/ProfListCell";
import "./styles.css";
import useProfessorAPI from "../../hooks/useProfessorAPI";

export default function HomeAdm() {
  const [professores, setProfessores] = useState([]);

  const { carregarProfessores } = useProfessorAPI();

  const getProfessores = async () => {
    carregarProfessores().then((res) => {
      setProfessores(res);
    })

  };

  const navigateTo = useNavigate();

  useEffect(() => {
    getProfessores();
  }, []);

  return (
    <Container>
      <div className="header">
        <h1>Lista de Professores</h1>

        <div className="buttonContainer">
          <Button
            variant="contained"
            onClick={() => {
              navigateTo("/professor/adicionar");
            }}>
            Adicionar
          </Button>
        </div>
      </div>

      {professores.map((professor, index) => {
        return <ProfListCell key={index} professor={professor} />;
      })}
    </Container>
  );
}
