import React, { useState, useEffect } from 'react';

export default function HomeAdm(){
  const [professores, setProfessores] = useState([]);
  const [novoProfessor, setNovoProfessor] = useState({
    nome: '',
    email: '',
    matricula: '',
    curso: '',
  });

  // Função para carregar os dados dos professores da API
  const carregarProfessores = async () => {
    try {
      const response = await fetch('https://pibicdb.onrender.com/professores');
      const data = await response.json();
      setProfessores(data);
    } catch (error) {
      console.error('Erro ao carregar os dados dos professores:', error);
    }
  };

  // Função para adicionar um novo professor
  const adicionarProfessor = async () => {
    try {
      const response = await fetch('https://pibicdb.onrender.com/professores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProfessor),
      });
      if (response.ok) {
        // Se o professor foi adicionado com sucesso, recarrega a lista de professores
        carregarProfessores();
        // Limpa os campos do novo professor após adicionar
        setNovoProfessor({ nome: '', email: '', matricula: '', curso: '' });
      } else {
        console.error('Erro ao adicionar professor');
      }
    } catch (error) {
      console.error('Erro ao adicionar professor:', error);
    }
  };

  // Carrega os dados dos professores quando o componente é montado
  useEffect(() => {
    carregarProfessores();
  }, []);

  return (
    <div>
      <h1>Lista de Professores</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Matrícula</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((professor) => (
            <tr key={professor.id}>
              <td>{professor.id}</td>
              <td>{professor.nome}</td>
              <td>{professor.email}</td>
              <td>{professor.matricula}</td>
              <td>{professor.curso}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
    </div>
  );
};


