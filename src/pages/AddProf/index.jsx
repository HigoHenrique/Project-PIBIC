import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function AddProf() {
  const [novoProfessor, setNovoProfessor] = useState({
    nome: "",
    email: "",
    matricula: "",
    curso: "",
  });

  const navigateTo = useNavigate();
  
  const adicionarProfessor = async () => {
    try {
      const response = await fetch("https://3.144.79.84/professores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoProfessor),
      });
      if (response.ok) {
        setNovoProfessor({ nome: "", email: "", matricula: "", curso: "" });
        alert("Professor adicionado com sucesso!")
        navigateTo("/administrador")
       
      } else {
        console.error("Erro ao adicionar professor");
      }
    } catch (error) {
      console.error("Erro ao adicionar professor:", error);
    }
  };
  return (
    <div className="mainContainer">
      <form>
      <h2>Adicionar Novo Professor</h2>
        <div>
          <TextField
            type="text"
            style={{ width: 600, margin: "5px" }}
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
            style={{ width: 600, margin: "5px" }}
            placeholder="Email"
            value={novoProfessor.email}
            onChange={(e) =>
              setNovoProfessor({ ...novoProfessor, email: e.target.value })
            }
          />
        </div>

        <div>
          <TextField
            type="text"
            style={{ width: 600, margin: "5px" }}
            placeholder="Matrícula"
            value={novoProfessor.matricula}
            onChange={(e) =>
              setNovoProfessor({ ...novoProfessor, matricula: e.target.value })
            }
          />
        </div>

        <div>
          <TextField
            type="text"
            style={{ width: 600, margin: "5px" }}
            placeholder="Curso"
            value={novoProfessor.curso}
            onChange={(e) =>
              setNovoProfessor({ ...novoProfessor, curso: e.target.value })
            }
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={adicionarProfessor}
          sx={{ mt: 3, mb: 2, background: "var(--cor-primary-1)", width: 600}}>
          Adicionar Professor
        </Button>
    </form>
    </div>
  );
}
