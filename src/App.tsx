import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import CadastroUsuario from "./pages/CadastroUsuario";
import Dashboard from "./pages/Dashboard";
import "./css/App.css";

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/elocert-app/" element={<LoginPage />} />
          <Route path="/elocert-app/cadastro_empresa" element={<CadastroEmpresa />} />
          <Route path="/elocert-app/cadastro_usuario" element={<CadastroUsuario />} />
          <Route path="/elocert-app/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

