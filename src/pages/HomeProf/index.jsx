// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'
import { Container, Button } from '@mui/material';

import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import useAutenticate from "../../hooks/useAutenticate";


const API_URL = 'http://3.144.79.84:3000/alunos';
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
    } catch (error) {
      console.error('Error ao adicionar novo aluno:', error);
    }
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
          {alunos.map((aluno) => (
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

      <h2>Adicionar novo aluno</h2>
      <form>
        <label>Email:
          <input type="text" name="email" value={novoAluno.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>Nome Completo Orientador:
          <input type="text" name="nomeCompletoOrientador" value={novoAluno.nomeCompletoOrientador} onChange={handleInputChange} />
        </label>
        <br />
        <label>Titulação:
          <input type="text" name="titulacao" value={novoAluno.titulacao} onChange={handleInputChange} />
        </label>
        <br />
        <label>Matrícula:
          <input type="text" name="matricula" value={novoAluno.matricula} onChange={handleInputChange} />
        </label>
        <br />
        <label>CPF Orientador:
          <input type="text" name="cpfOrientador" value={novoAluno.cpfOrientador} onChange={handleInputChange} />
        </label>
        <br />
        <label>Curso Orientador:
          <input type="text" name="cursoOrientador" value={novoAluno.cursoOrientador} onChange={handleInputChange} />
        </label>
        <br />
        <label>Telefone Orientador:
          <input type="text" name="telefoneOrientador" value={novoAluno.telefoneOrientador} onChange={handleInputChange} />
        </label>
        <br />
        <label>Título Projeto:
          <input type="text" name="tituloProjeto" value={novoAluno.tituloProjeto} onChange={handleInputChange} />
        </label>
        <br />
        <label>Área Conhecimento CNPQ:
          <input type="text" name="areaConhecimentoCNPQ" value={novoAluno.areaConhecimentoCNPQ} onChange={handleInputChange} />
        </label>
        <br />
        <label>Nome Grupo Pesquisa:
          <input type="text" name="nomeGrupoPesquisa" value={novoAluno.nomeGrupoPesquisa} onChange={handleInputChange} />
        </label>
        <br />
        <label>Nome Aluno:
          <input type="text" name="nomeAluno" value={novoAluno.nomeAluno} onChange={handleInputChange} />
        </label>
        <br />
        <label>Registro Acadêmico:
          <input type="text" name="registroAcademico" value={novoAluno.registroAcademico} onChange={handleInputChange} />
        </label>
        <br />
        <label>Indicação:
          <input type="text" name="indicacao" value={novoAluno.indicacao} onChange={handleInputChange} />
        </label>
        <br />
        <label>Condição Final:
          <input type="text" name="condicaoFinal" value={novoAluno.condicaoFinal} onChange={handleInputChange} />
        </label>
        <br />
        <label>Título Plano Trabalho:
          <input type="text" name="tituloPlanoTrabalho" value={novoAluno.tituloPlanoTrabalho} onChange={handleInputChange} />
        </label>
        <br />
        <label>Email Institucional Aluno:
          <input type="text" name="emailInstitucionalAluno" value={novoAluno.emailInstitucionalAluno} onChange={handleInputChange} />
        </label>
        <br />
        <label>Endereço Completo:
          <input type="text" name="enderecoCompleto" value={novoAluno.enderecoCompleto} onChange={handleInputChange} />
        </label>
        <br />
        <label>CPF Aluno:
          <input type="text" name="cpfAluno" value={novoAluno.cpfAluno} onChange={handleInputChange} />
        </label>
        <br />
        <label>RG Aluno:
          <input type="text" name="rgAluno" value={novoAluno.rgAluno} onChange={handleInputChange} />
        </label>
        <br />
        <label>Data Nascimento Aluno:
          <input type="text" name="dataNascAluno" value={novoAluno.dataNascAluno} onChange={handleInputChange} />
        </label>
        <br />
        <label>Telefone Aluno:
          <input type="text" name="telefoneAluno" value={novoAluno.telefoneAluno} onChange={handleInputChange} />
        </label>
        <br />
        <label>Link Lattes:
          <input type="text" name="linkLattes" value={novoAluno.linkLattes} onChange={handleInputChange} />
        </label>
        <br />
        <label>Observação:
          <input type="text" name="obs1" value={novoAluno.obs1} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddAluno}>
          Adicionar
        </button>
      </form>
    </div>
  );
}


