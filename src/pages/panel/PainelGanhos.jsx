import "../../css/PainelGanhos.css";

export default function PainelGanhos({ total, ganhoCnpj }) {

  
  const porcentagem = (ganhoCnpj / total) * 100;
  const raio = 45;
  const circ = 2 * Math.PI * raio;
  const dash = (porcentagem / 100) * circ;

  return (
    <div className="painel-ganho">
      <div className="painel-ganho-titulo">Ganhos Atuais</div>

      <div className="painel-ganho-grafico">
        <svg width="120" height="120">
          <circle
            cx="60"
            cy="60"
            r={raio}
            className="grafico-ganho-fundo"
          />
          <circle
            cx="60"
            cy="60"
            r={raio}
            className="grafico-ganho-progresso"
            strokeDasharray={`${dash} ${circ - dash}`}
            transform="rotate(-90 60 60)"
          />
        </svg>

        <div className="grafico-ganho-total">{total}</div>
        <div className="grafico-ganho-etiqueta">R${ganhoCnpj}</div>
      </div>

      <div className="painel-ganho-legenda">
        <div className="legenda-ganho-item">
          <div className="legenda-ganho-cor cor-ganho-cnpj" />
          E-CNPJ
        </div>
        <div className="legenda-ganho-item">
          <div className="legenda-ganho-cor cor-ganho-cpf" />
          E-CPF
        </div>
      </div>
    </div>
  );
}
