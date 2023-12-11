// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'
import { Container, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import useAutenticate from "../../hooks/useAutenticate";
import swal from 'sweetalert2';


const API_URL = 'https://3.144.79.84/alunos';
export default function HomeProf() {
  const [alunos, setAlunos] = useState([]);
  const [novoAluno, setNovoAluno] = useState({
    email: '',
    nomeCompletoOrientador: '',
    titulacao: '',
    matricula: '',
    cpfOrientador: '',
    cursoOrientador: '',
    telefoneOrientador: '',
    tituloProjeto: '',
    areaConhecimentoCNPQ: '',
    nomeGrupoPesquisa: '',
    nomeAluno: '',
    registroAcademico: '',
    indicacao: '',
    condicaoFinal: '',
    tituloPlanoTrabalho: '',
    emailInstitucionalAluno: '',
    enderecoCompleto: '',
    cpfAluno: '',
    rgAluno: '',
    dataNascAluno: '',
    telefoneAluno: '',
    linkLattes: '',
    obs1: '',
  });
  const [tabelaVisivel, setTabelaVisivel] = useState(true);
  const { userLogged } = useUser();
  const navigateTo = useNavigate();
  const { logout } = useAutenticate()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setAlunos(response.data);
    } catch (error) {
      console.error('Error ao obter dados:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoAluno((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAluno = async () => {
    try {
      await axios.post(API_URL, novoAluno);
      fetchData();
      setNovoAluno({
        email: '',
        nomeCompletoOrientador: '',
        titulacao: '',
        matricula: '',
        cpfOrientador: '',
        cursoOrientador: '',
        telefoneOrientador: '',
        tituloProjeto: '',
        areaConhecimentoCNPQ: '',
        nomeGrupoPesquisa: '',
        nomeAluno: '',
        registroAcademico: '',
        indicacao: '',
        condicaoFinal: '',
        tituloPlanoTrabalho: '',
        emailInstitucionalAluno: '',
        enderecoCompleto: '',
        cpfAluno: '',
        rgAluno: '',
        dataNascAluno: '',
        telefoneAluno: '',
        linkLattes: '',
        obs1: '',
      });
      swal.fire({
        title: 'Aluno Cadastrado!',
        text: 'Aluno Cadastrado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
    });
    } catch (error) {
      console.error('Error ao adicionar novo aluno:', error);
      swal.fire({
        title: 'Erro!',
        text: 'Aluno não foi cadastrado!',
        icon: 'error',
        confirmButtonText: 'Ok'
    });
      
    }
  };

  const toggleTabelaVisivel = () => {
    setTabelaVisivel(!tabelaVisivel);
  };

  return (
    <div style={{ margin: 50, offset: 1 }}>
      <div className="header">
        <div>
          <div className="welcomeContainer">
            <h1>Bem-vindo(a) {userLogged.nome}</h1>
            <div className="buttonContainer">
              
            <Button
                variant="contained"
                onClick={toggleTabelaVisivel}
                style={{ background: "var(--cor-font-2)", margin: 10 }}
              >{tabelaVisivel ? "Mostrar Tabela" : "Esconder Tabela"}
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
      {tabelaVisivel && (
        <>
      <h1>Lista de Alunos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Nome Completo Orientador</th>
            <th>Titulação</th>
            <th>Matrícula</th>
            <th>CPF Orientador</th>
            <th>Curso Orientador</th>
            <th>Telefone Orientador</th>
            <th>Título Projeto</th>
            <th>Área Conhecimento CNPQ</th>
            <th>Nome Grupo Pesquisa</th>
            <th>Nome Aluno</th>
            <th>Registro Acadêmico</th>
            <th>Indicação</th>
            <th>Condição Final</th>
            <th>Título Plano Trabalho</th>
            <th>Email Institucional Aluno</th>
            <th>Endereço Completo</th>
            <th>CPF Aluno</th>
            <th>RG Aluno</th>
            <th>Data Nascimento Aluno</th>
            <th>Telefone Aluno</th>
            <th>Link Lattes</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
  {alunos
    .filter((aluno) => aluno.email === userLogged.email)
    .map((aluno) => (
      <tr key={aluno.id}>
        <td>{aluno.id}</td>
        <td>{aluno.email}</td>
        <td>{aluno.nomeCompletoOrientador}</td>
        <td>{aluno.titulacao}</td>
        <td>{aluno.matricula}</td>
        <td>{aluno.cpfOrientador}</td>
        <td>{aluno.cursoOrientador}</td>
        <td>{aluno.telefoneOrientador}</td>
        <td>{aluno.tituloProjeto}</td>
        <td>{aluno.areaConhecimentoCNPQ}</td>
        <td>{aluno.nomeGrupoPesquisa}</td>
        <td>{aluno.nomeAluno}</td>
        <td>{aluno.registroAcademico}</td>
        <td>{aluno.indicacao}</td>
        <td>{aluno.condicaoFinal}</td>
        <td>{aluno.tituloPlanoTrabalho}</td>
        <td>{aluno.emailInstitucionalAluno}</td>
        <td>{aluno.enderecoCompleto}</td>
        <td>{aluno.cpfAluno}</td>
        <td>{aluno.rgAluno}</td>
        <td>{aluno.dataNascAluno}</td>
        <td>{aluno.telefoneAluno}</td>
        <td>{aluno.linkLattes}</td>
        <td>{aluno.obs1}</td>
      </tr>
    ))}
</tbody>
</table>
</>
)}

        <br />
        <div id='inputs'>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h2>Adicionar novo aluno</h2>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  type="text"
                  name="email"
                  value={novoAluno.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Nome Completo Orientador"
                  label="Nome Completo Orientador"
                  type="text"
                  name="nomeCompletoOrientador"
                  value={novoAluno.nomeCompletoOrientador}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Titulação"
                  type="text"
                  name="titulacao"
                  value={novoAluno.titulacao}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Matrícula"
                  type="text"
                  name="matricula"
                  value={novoAluno.matricula}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 title="CPF Orientador"
                  label="CPF Orientador"
                  type="text"
                  name="cpfOrientador"
                  value={novoAluno.cpfOrientador}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 title="Curso Orientador"
                  label="Curso Orientador"
                  type="text"
                  name="cursoOrientador"
                  value={novoAluno.cursoOrientador}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Telefone Orientador"
                  label="Telefone Orientador"
                  type="text"
                  name="telefoneOrientador"
                  value={novoAluno.telefoneOrientador}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Título Projeto"
                  label="Título Projeto"
                  type="text"
                  name="tituloProjeto"
                  value={novoAluno.tituloProjeto}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 title="Área Conhecimento CNPQ"
                  label="Área Conhecimento CNPQ"
                  type="text"
                  name="areaConhecimentoCNPQ"
                  value={novoAluno.areaConhecimentoCNPQ}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Nome Grupo Pesquisa"
                  label="Nome Grupo Pesquisa"
                  type="text"
                  name="nomeGrupoPesquisa"
                  value={novoAluno.nomeGrupoPesquisa}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Nome Aluno"
                  label="Nome Aluno"
                  type="text"
                  name="nomeAluno"
                  value={novoAluno.nomeAluno}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Registro Acadêmico"
                  label="Registro Acadêmico"
                  type="text"
                  name="registroAcademico"
                  value={novoAluno.registroAcademico}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 title="Indicação"
                  label="Indicação"
                  type="text"
                  name="indicacao"
                  value={novoAluno.indicacao}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Condição Final"
                  label="Condição Final"
                  type="text"
                  name="condicaoFinal"
                  value={novoAluno.condicaoFinal}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Título Plano Trabalho"
                  label="Título Plano Trabalho"
                  type="text"
                  name="tituloPlanoTrabalho"
                  value={novoAluno.tituloPlanoTrabalho}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Email Institucional Aluno"
                  label="Email Institucional Aluno"
                  type="text"
                  name="emailInstitucionalAluno"
                  value={novoAluno.emailInstitucionalAluno}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Endereço Completo"
                  label="Endereço Completo"
                  type="text"
                  name="enderecoCompleto"
                  value={novoAluno.enderecoCompleto}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 title="CPF Aluno"
                  label="CPF Aluno"
                  type="text"
                  name="cpfAluno"
                  value={novoAluno.cpfAluno}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 title="RG Aluno"
                  label="RG Aluno"
                  type="text"
                  name="rgAluno"
                  value={novoAluno.rgAluno}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Data Nascimento Aluno"
                  label="Data Nascimento Aluno"
                  type="text"
                  name="dataNascAluno"
                  value={novoAluno.dataNascAluno}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Telefone Aluno"
                  label="Telefone Aluno"
                  type="text"
                  name="telefoneAluno"
                  value={novoAluno.telefoneAluno}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                title="Link Lattes"
                  label="Link Lattes"
                  type="text"
                  name="linkLattes"
                  value={novoAluno.linkLattes}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                
                  label="Observação"
                  type="text"
                  name="obs1"
                  value={novoAluno.obs1}
                  onChange={handleInputChange}
                />
              </Grid>
              {/* Repeat the above structure for each field */}
            </Grid>
            <br />
            <button type="button" onClick={handleAddAluno}>
              Adicionar
            </button>
          </form>
        </Grid>
      </Grid>
            </div>
    </div>
  );
}

