import React, { useState } from "react";
import { Container, Button, TextField } from "@mui/material";

import "./styles.css";

export default function AddProf({ carregarProfessores }) {
  const [novoProfessor, setNovoProfessor] = useState({
    nome: "",
    email: "",
    matricula: "",
    curso: "",
  });

  const adicionarProfessor = async () => {
    try {
      const response = await fetch("https://pibicdb.onrender.com/professores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoProfessor),
      });
      if (response.ok) {
        setNovoProfessor({ nome: "", email: "", matricula: "", curso: "" });
      } else {
        console.error("Erro ao adicionar professor");
      }
    } catch (error) {
      console.error("Erro ao adicionar professor:", error);
    }
  };
  return (
    <form>
      <h2>Adicionar Novo Professor</h2>
      <Container
        sx={{
          flexDirection: "column",
        }}>
        <div>
          <TextField
            type="text"
            style={{ width: "500px", margin: "5px" }}
            placeholder="Nome"
            value={novoProfessor.nome}
            onChange={(e) =>
              setNovoProfessor({ ...novoProfessor, nome: e.target.value })
            }
          />
        </div>

        <div>
          <TextField
            type="text"
            style={{ width: "500px", margin: "5px" }}
            placeholder="Email"
            value={novoProfessor.email}
            onChange={(e) =>
              setNovoProfessor({ ...novoProfessor, email: e.target.value })
            }
          />
        </div>

        <TextField
          type="text"
          style={{ width: "500px", margin: "5px", display: "block" }}
          placeholder="Matrícula"
          value={novoProfessor.matricula}
          onChange={(e) =>
            setNovoProfessor({ ...novoProfessor, matricula: e.target.value })
          }
        />
        <TextField
          type="text"
          style={{ width: "500px", margin: "5px", display: "block" }}
          placeholder="Curso"
          value={novoProfessor.curso}
          onChange={(e) =>
            setNovoProfessor({ ...novoProfessor, curso: e.target.value })
          }
        />
        <Button
          variant="contained"
          color="primary"
          onClick={adicionarProfessor}
          style={{
            width: "500px",
          }}>
          Adicionar Professor
        </Button>
      </Container>
    </form>
  );
}
