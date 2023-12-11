import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Header from '../../components/Header';
import { Box, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';

import fotospdf from "../../assets/icons8-pdf-40.png"
import fotospdff from "../../assets/icons8-export-pdf-40.png"


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
        swal.fire({
          title: 'Professor Adicionado!',
          text: 'Use seu email e matrícula no login',
          icon: 'success',
          confirmButtonText: 'Ok'
      });
        navigateTo("/login")
       
      } else {
        alert("Erro ao adicionar Professor!")
        console.error("Erro ao adicionar professor");
      }
    } catch (error) {
      console.error("Erro ao adicionar professor:", error);
      alert("Erro ao adicionar Professor!")
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
              value={novoProfessor.nome}
              onChange={(e) =>
                setNovoProfessor({ ...novoProfessor, nome: e.target.value })
              }
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
              value={novoProfessor.matricula}
              onChange={(e) =>
                setNovoProfessor({ ...novoProfessor, matricula: e.target.value })
              }
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              required
              id="endereco"
              name="endereco"
              label="Endereço"
              fullWidth
              variant="standard"
              value={formData.endereco}
              onChange={handleInputChange}
            /> */}
          {/* </Grid>
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
          </Grid> */}
          {/* <Grid item xs={12} sm={6}>
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
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="telefone"
              name="telefone"
              label="Telefone"
              fullWidth
              variant="standard"
              // value={formData.telefone}
              // onChange={handleInputChange}
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
              value={novoProfessor.curso}
            onChange={(e) =>
              setNovoProfessor({ ...novoProfessor, curso: e.target.value })
            }
            />

          <img
          id='pdfImagg'
           
           src={fotospdff}
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
              value={novoProfessor.email}
            onChange={(e) =>
              setNovoProfessor({ ...novoProfessor, email: e.target.value })
            }
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
              // onChange={handleInputChange}
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
              // onChange={handleInputChange}
            />
          </Grid>


          <img
            id="pdfImag"
           src={fotospdf}
         />

          <a id="linkEdital" href="https://portal.unicap.br/documents/475032/3383298/PIBIC+26%C2%BA+Edital+-+2023.2024.pdf/bc13d631-31ff-8337-2aca-bcad93f954c7?t=1682705006130">Edital Pibic</a>

        </Grid>

        <Button
          sx={{
            display: 'flex',
            margin: 'auto',
            marginTop: '100px',
            width: '40%',
            height: '40px',
          }}
          variant="contained"
          onClick={adicionarProfessor}
        >
          Cadastrar
        </Button>
      </Box>
    </>
  );
}
