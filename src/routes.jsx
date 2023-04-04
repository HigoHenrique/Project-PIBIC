import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/Form/index'
import Home from './pages/Home/index'
import Login from './pages/Login/index'


export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/form' element={<Form/>} />
            </Routes>
        </BrowserRouter>
    )
};
