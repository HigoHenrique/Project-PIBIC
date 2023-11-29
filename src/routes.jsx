import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChoseLogin from './pages/ChoseLogin/index'
import HomeAdm from './pages/HomeAdm'
import Login from './pages/Login'
import Aluno from './pages/Aluno'
import HomeProf from './pages/HomeProf'


export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ChoseLogin/>} />
                <Route path='/homeAdm' element={<HomeAdm/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/aluno' element={<Aluno/>} />
                <Route path='/homeProf' element={<HomeProf/>} />
            </Routes>
        </BrowserRouter>
    )
};
