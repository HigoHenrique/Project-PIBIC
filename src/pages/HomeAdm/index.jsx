import React, { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ProfListCell from "../../components/ProfListCell";
import "./styles.css";
import useProfessorAPI from "../../hooks/useProfessorAPI";
import { useUser } from "../../hooks/useUser";
import useAutenticate from "../../hooks/useAutenticate";

export default function HomeAdm() {
  const [professores, setProfessores] = useState([]);
  const { logout } = useAutenticate()
  const { userLogged } = useUser();
  const { carregarProfessores } = useProfessorAPI();

  const getProfessores = async () => {
    carregarProfessores().then((res) => {
      setProfessores(res);
    });
  };

  const navigateTo = useNavigate();

  useEffect(() => {
    getProfessores();
  }, []);

  return (
    <Container>
      <div className="header">
        <div>
          <div className="welcomeContainer">
            <h1>Bem-vindo(a) {userLogged.nome}</h1>
            <div className="buttonContainer">
              <Button
                variant="contained"
                onClick={() => {
                  navigateTo("/professor/adicionar");
                }}>
                Adicionar
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  logout()
                }}
                style={{ background: "var(--cor-font-2)", margin: 10 }}
                >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

        <h2>Lista de Docentes</h2>
      {professores.map((professor, index) => {
        return <ProfListCell key={index} professor={professor} />;
      })}
    </Container>
  );
}
