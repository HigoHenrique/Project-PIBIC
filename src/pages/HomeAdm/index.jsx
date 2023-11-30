import React, { useState, useEffect } from "react";
import {
  Container
} from "@mui/material";

import ProfListCell from "../../components/ProfListCell";

export default function HomeAdm() {
  const [professores, setProfessores] = useState([]);
  const [novoProfessor, setNovoProfessor] = useState({
    nome: "",
    email: "",
    matricula: "",
    curso: "",
  });

  const carregarProfessores = async () => {
    try {
      const response = await fetch("https://pibicdb.onrender.com/professores");
      const data = await response.json();
      setProfessores(data);
    } catch (error) {
      console.error("Erro ao carregar os dados dos professores:", error);
    }
  };

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
        // Se o professor foi adicionado com sucesso, recarrega a lista de professores
        carregarProfessores();
        // Limpa os campos do novo professor após adicionar
        setNovoProfessor({ nome: "", email: "", matricula: "", curso: "" });
      } else {
        console.error("Erro ao adicionar professor");
      }
    } catch (error) {
      console.error("Erro ao adicionar professor:", error);
    }
  };

  useEffect(() => {
    carregarProfessores();

    console.log(professores);
  }, []);

  return (
    <Container>
      <h1>Lista de Professores</h1>

      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Matrícula</th>
        <th>Curso</th>
      </tr>
      {professores.map((professor, index) => {
        return (
          <ProfListCell key={index} professor={professor} />
        )
      })}

      <h2>Adicionar Novo Professor</h2>
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={novoProfessor.nome}
          onChange={(e) =>
            setNovoProfessor({ ...novoProfessor, nome: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Email"
          value={novoProfessor.email}
          onChange={(e) =>
            setNovoProfessor({ ...novoProfessor, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Matrícula"
          value={novoProfessor.matricula}
          onChange={(e) =>
            setNovoProfessor({ ...novoProfessor, matricula: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Curso"
          value={novoProfessor.curso}
          onChange={(e) =>
            setNovoProfessor({ ...novoProfessor, curso: e.target.value })
          }
        />
        <button onClick={adicionarProfessor}>Adicionar Professor</button>
      </div>
    </Container>
  );
}
