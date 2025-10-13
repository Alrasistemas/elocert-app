import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/LoginPage.css";
import logo from "../image/logo-elocert.png"; 
import mulher from "../image/mulher-relatorio.jpg"; 

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setLoading(true);

   
    await new Promise((r) => setTimeout(r, 600));

    if (login === "admin" && senha === "admin") {
       navigate("/elocert-app/dashboard");
    } else {
      setErro("Login ou senha inválidos");
    }

    setLoading(false);
  }

  return (

    
    <div className="login-page">

      <img className="login-painel-esqueda " src={mulher}  alt="Mulher com tablet" />
      
      
      <form className="login-panel-direita" onSubmit={handleSubmit}>
        <div className="login-logo-container">
          <img src={logo} alt="logo" />
        </div>

        <h2 className="login-titulo">BEM-VINDO NOVAMENTE!</h2>

        <label className="login-label" htmlFor="login">LOGIN:</label>
        <input
          id="login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="login-tx"
          placeholder="Digite seu login"
        />

        <label className="login-label" htmlFor="senha">SENHA:</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="login-tx"
          placeholder="Digite sua senha"
        />

        <div className="login-check">
          <input
            id="lembrar"
            type="checkbox"
            checked={lembrar}
            onChange={(e) => setLembrar(e.target.checked)}
          />
          <label htmlFor="lembrar">Lembrar</label>
        </div>

        {erro && <div className="login-erro">{erro}</div>}

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? "Entrando..." : "ENTRAR"}
        </button>

        <p className="login-link">
          Não tem uma conta? <Link to="/elocert-app/cadastro_empresa">Credencie-se</Link>
        </p>
      </form>
    </div>
  );
}
