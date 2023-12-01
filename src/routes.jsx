import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoseLogin from "./pages/ChoseLogin/index";
import HomeAdm from "./pages/HomeAdm";
import Login from "./pages/Login";
import Aluno from "./pages/Aluno";
import HomeProf from "./pages/HomeProf";
import AddProf from "./pages/AddProf";
import FormProf from "./pages/FormProf"
import { UserProvider } from "./hooks/useUser";

export default function Router() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChoseLogin />} />
          <Route path="/administrador" element={<HomeAdm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aluno" element={<Aluno />} />
          <Route path="/professor" element={<HomeProf />} />
          <Route path="/formProf" element={<FormProf />} />
          <Route path="/professor/adicionar" element={<AddProf />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
