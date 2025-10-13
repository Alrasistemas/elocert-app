
import "../css/CadastroEmpresa.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CadastroEmpresa() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    cnpj: "",
    razao: "",
    cep: "",
    fantasia: "",
    email: "",
    telefone: "",
    endereco: "",
    cidade: "",
    bairro: "",
    complemento: "",
    numero: "",
    uf: "",
    termos: false,
    politica: false,
  });

  // Funções de máscara
  const maskCNPJ = (v) =>
    v
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})$/, "$1-$2");

  const maskCEP = (v) =>
    v.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2").slice(0, 9);

  const maskTelefone = (v) =>
    v
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = value;

    // aplica máscara
    if (name === "cnpj") val = maskCNPJ(value);
    if (name === "cep") val = maskCEP(value);
    if (name === "telefone") val = maskTelefone(value);

    setForm({ ...form, [name]: type === "checkbox" ? checked : val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   // alert("Dados enviados:\n" + JSON.stringify(form, null, 2));
    nav("/elocert-app/cadastro_usuario"); // próximo passo
  };

  return (
    <div className="cadastro-page">
      <h2>
        VAMOS COMEÇAR!
      </h2>
      <h3>
        Falta pouco para você ter acesso à plataforma completa. <br />
        Preencha os dados abaixo e comece a crescer com certificação digital.
      </h3>

      <form className="cadastro-form" onSubmit={handleSubmit}>
        <div className="tabs">
          <span className="active">DADOS DA EMPRESA</span>
          <span>CADASTRO DE USUÁRIO</span>
        </div>

        <div className="grid">
          <input className="campo1" name="cnpj" placeholder="CNPJ *" value={form.cnpj} onChange={handleChange} />
          <input className="campo2" name="razao" placeholder="Razão Social *" value={form.razao} onChange={handleChange} />
          <input className="campo1" name="cep" placeholder="CEP *" value={form.cep} onChange={handleChange} />
          <input className="campo2" name="fantasia" placeholder="Nome Fantasia *" value={form.fantasia} onChange={handleChange} />
          <input className="campo3" name="email" placeholder="E-mail *" value={form.email} onChange={handleChange} />
          <input className="campo4" name="telefone" placeholder="Telefone *" value={form.telefone} onChange={handleChange} />
          <input className="campo3" name="endereco" placeholder="Endereço *" value={form.endereco} onChange={handleChange} />
          <input className="campo4" name="cidade" placeholder="Cidade *" value={form.cidade} onChange={handleChange} />
          <input className="campo1" name="bairro" placeholder="Bairro *" value={form.bairro} onChange={handleChange} />
          <input className="campo5" name="complemento" placeholder="Complemento" value={form.complemento} onChange={handleChange} />
          <input className="campo6" name="numero" placeholder="Número" value={form.numero} onChange={handleChange} />
          <input className="campo7" name="uf" placeholder="UF *" value={form.uf} onChange={handleChange} />
        </div>

        <label className="check">
          <input type="checkbox" name="termos" checked={form.termos} onChange={handleChange} /> Li e concordo com os termos de parceria Elocert
        </label>
        <label className="check">
          <input type="checkbox" name="politica" checked={form.politica} onChange={handleChange} /> Li e concordo com a política de privacidade
        </label>

        <div className="botoes">
          <button type="submit" className="btn-proximo">PRÓXIMO</button>
        </div>
      </form>
    </div>
  );
}
