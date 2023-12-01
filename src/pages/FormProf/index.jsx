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
    curriculo: '',
    vinculacao: '',
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
      window.location.href = '/';
      alert('Cadastro realizado com sucesso!');
    } else {
      const errorData = await response.json();
      console.error('Erro ao cadastrar:', errorData.message);
      // Tratar o erro de acordo com sua necessidade
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
          <Grid item xs={12} sm={6}>
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

          <Grid item xs={12} sm={6} id="input2">
            <TextField
              required
              type="file"
              id="curriculo"
              name="curriculo"
              label="Formulário Avaliação do Currículo Lattes"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} id="input3">
            <TextField
              required
              type="file"
              id="vinculacao"
              name="vinculacao"
              label="Vinculação ao grupo de pesquisa"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Button
          sx={{
            display: 'flex',
            margin: 'auto',
            marginTop: '20px',
            width: '100%',
            height: '40px',
          }}
          variant="contained"
          onClick={handleCadastro}
        >
          Cadastrar
        </Button>
      </Box>
    </>
  );
}
