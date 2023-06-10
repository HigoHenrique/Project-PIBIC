import styles from './Form.module.css'
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Header from '../../components/Header';
import { Box, Button } from '@mui/material';

export default function Form() {
  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    endereco: '',
    cpf: '',
    rg: '',
    telefone: '',
    curso: '',
    email: '',
    emailProfessor: '',
    curriculo: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastro = async () => {
    const response = await fetch('https://pibicdb-barbosaerick88.b4a.run/alunos/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Cadastro realizado com sucesso
      // Exemplo: redirecionar para outra página
      window.location.href = '/';

      // Ou, exemplo: mostrar uma mensagem de sucesso
      alert('Cadastro realizado com sucesso!');
    } else {
      // Erro ao cadastrar
      // Exemplo: mostrar mensagem de erro
      const errorData = await response.json();
      console.error('Erro ao cadastrar:', errorData.message);

      // Ou, exemplo: tratar o erro de acordo com sua necessidade
      // ...
    }
  };

  return (
    <>
      <Header />
      <Box sx={{ margin: '20px' }}>
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
              id="matricula"
              name="matricula"
              label="Matrícula"
              fullWidth
              variant="standard"
              value={formData.matricula}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="endereco"
              name="endereco"
              label="Endereço"
              fullWidth
              variant="standard"
              value={formData.endereco}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cpf"
              name="cpf"
              label="CPF"
              fullWidth
              variant="standard"
              value={formData.cpf}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="rg"
              name="rg"
              label="RG"
              fullWidth
              variant="standard"
              value={formData.rg}
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
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="standard"
              value={formData.email}
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
          <Grid item xs={12}>
            <TextField
              required
              id="curriculo"
              name="curriculo"
              label="Currículo"
              fullWidth
              variant="standard"
              value={formData.curriculo}
              onChange={handleInputChange}
            />
          </Grid>
          <Button
            sx={{ margin: 'auto', marginTop: '20px', width: '100px', height: '40px' }}
            variant='contained'
            onClick={handleCadastro}
          >
            Cadastrar
          </Button>
        </Grid>
      </Box>
    </>
  );
}
