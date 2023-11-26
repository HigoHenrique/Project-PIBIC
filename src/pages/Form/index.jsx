import styles from "./Form.module.css";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";
import { Box, Button } from "@mui/material";

export default function Form() {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    email: "",
    matricula: "",
    curso: "",
    telefone: "",
    projeto: "",
    emailProfessor: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastro = async () => {
    const response = await fetch("https://pibicdb.onrender.com/alunos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      const aluno = await response.json();
      console.log("Cadastro realizado com sucesso:", aluno);
      window.location.href = "/"; 
      alert("Cadastro realizado com sucesso!");
    } else {
      try {
        const errorData = await response.json();
        console.error("Erro ao cadastrar:", errorData.message);
        alert("Erro ao cadastrar: " + errorData.message);
      } catch (error) {
        console.error("Erro ao processar a resposta:", error);
        alert("Erro ao processar a resposta do servidor.");
      }
    }
  };
  return (
    <>
      <Header />
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Cadastro
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nome"
              name="nome"
              label="Nome"
              fullWidth
              variant="standard"
              value={formData.nome}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="standard"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="matricula"
              name="matricula"
              label="Matricula"
              fullWidth
              variant="standard"
              value={formData.matricula}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="curso"
              name="curso"
              label="Curso"
              fullWidth
              variant="standard"
              value={formData.curso}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="projeto"
              name="projeto"
              label="Projeto"
              fullWidth
              variant="standard"
              value={formData.projeto}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="telefone"
              name="telefone"
              label="Telefone"
              fullWidth
              variant="standard"
              value={formData.telefone}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="emailProfessor"
              name="emailProfessor"
              label="Email do Professor"
              fullWidth
              variant="standard"
              value={formData.emailProfessor}
              onChange={handleInputChange}
            />
          </Grid>
          <Button
            sx={{
              margin: "auto",
              marginTop: "20px",
              width: "100px",
              height: "40px",
            }}
            variant="contained"
            onClick={handleCadastro}
          >
            Cadastrar
          </Button>
        </Grid>
      </Box>
    </>
  );
}
