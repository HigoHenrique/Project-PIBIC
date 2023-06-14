import styles from './Home.module.css'
import Header from '../../components/Header'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';

export default function Home() {
    const [alunos, setAlunos] = React.useState([]);

    React.useEffect(() => {
        fetch('https://pibicdb-barbosaerick88.b4a.run/alunos/')
            .then(response => response.json())
            .then(data => {
                const filteredAlunos = data.filter(aluno => aluno.emailProfessor === 'professor@email.com');
                setAlunos(filteredAlunos);
            })
            .catch(error => {
                console.error('Erro ao buscar os alunos:', error);
            });
    }, []);

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ margin: '20px' }}>
                    <Typography variant='h2'>Lista de cadastrados</Typography>
                </Box>
                <Box sx={{ width: '80%' }}>
                    <Table size="medium">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Matrícula</TableCell>
                                <TableCell>Endereço</TableCell>
                                <TableCell>CPF</TableCell>
                                <TableCell>RG</TableCell>
                                <TableCell>Telefone</TableCell>
                                <TableCell>Curso</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Email do Professor</TableCell>
                                <TableCell>Currículo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {alunos.map((aluno) => (
                                <TableRow key={aluno.idAluno}>
                                    <TableCell>{aluno.nome}</TableCell>
                                    <TableCell>{aluno.matricula}</TableCell>
                                    <TableCell>{aluno.endereco}</TableCell>
                                    <TableCell>{aluno.cpf}</TableCell>
                                    <TableCell>{aluno.rg}</TableCell>
                                    <TableCell>{aluno.telefone}</TableCell>
                                    <TableCell>{aluno.curso}</TableCell>
                                    <TableCell>{aluno.email}</TableCell>
                                    <TableCell>{aluno.emailProfessor}</TableCell>
                                    <TableCell>{aluno.curriculo}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </>
    );
}
