import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CadastroEmpresa.css";


export default function CadastroUsuario() {
  const nav = useNavigate();
  const [f, setF] = useState({
    cpf:"", nome:"", telefone:"", email:"",
    endereco:"", cidade:"", cep:"", bairro:"",
    numero:"", uf:"", complemento:"", acesso:"user"
  });

  const onChange = e => {
    const { name, value } = e.target;
    setF(p => ({ ...p, [name]: value }));
  };

  const submit = e => {
    e.preventDefault();
    // envie para API aqui
    console.log("payload", f);
    nav("/elocert-app/"); // próximo passo
  };

  return (
    <div className="cadastro-page">
      <h2>QUASE LÁ !</h2>
      <h3>Chegou a hora de cadastrar o primeiro usuário.<br/>
      Preencha os dados abaixo para fazer seus primeiros pedidos.</h3>

      <form className="cadastro-form" onSubmit={submit}>
        <div className="tabs">
          <span>DADOS DA EMPRESA</span>
          <span className="active">CADASTRO DE USUÁRIO</span>
        </div>

        <div className="grid">
          <input className="campo1"     name="cpf"       placeholder="CPF*"        value={f.cpf} onChange={onChange}/>
          <input className="campo2"     name="nome"      placeholder="Nome Completo*" value={f.nome} onChange={onChange}/>
          <input className="campo1"     name="telefone"  placeholder="Telefone*"   value={f.telefone} onChange={onChange}/>
          <input className="campo2"     name="email"     placeholder="E-mail*"     value={f.email} onChange={onChange}/>
          <input className="campo3"     name="endereco"  placeholder="Endereço *"  value={f.endereco} onChange={onChange}/>
          <input className="campo4"     name="cidade"    placeholder="Cidade *"    value={f.cidade} onChange={onChange}/>
          <input className="campo1"     name="cep"       placeholder="Cep*"        value={f.cep} onChange={onChange}/>
          <input className="campo1"     name="bairro"    placeholder="Bairro*"     value={f.bairro} onChange={onChange}/>
          <input className="campo6"     name="numero"    placeholder="Número *"    value={f.numero} onChange={onChange}/>
          <input className="campo7"     name="uf"        placeholder="UF *"        value={f.uf} onChange={onChange}/>
          <input className="campo1"     name="complemento" placeholder="Complemento" value={f.complemento} onChange={onChange}/>
        </div>

     

        <div className="botoes">
          <button type="submit" className="btn-proximo">CADASTAR</button>
        </div>
      </form>
    </div>
  );
}
