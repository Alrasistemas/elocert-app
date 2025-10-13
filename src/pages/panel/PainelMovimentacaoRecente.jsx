// src/components/PainelMovimentacaoRecente.jsx
import PropTypes from "prop-types";
import "../../css/PainelMovimentacaoRecente.css";

function brl(v){ return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}); }

export default function PainelMovimentacaoRecente({
  titulo = "Movimentação Recente",
  grupo = "Hoje",
  itens = [],           // [{ icon?:node, texto:string, valor:number }]
  preencher = 5,        // renderiza “slots” vazios
}) {
  const slotsVazios = Math.max(0, preencher - itens.length);
  return (
    <div className="pmr-card">
      <div className="pmr-head">{titulo}</div>
      <div className="pmr-body">
        <div className="pmr-group">{grupo}</div>

        {itens.map((it, i) => (
          <div className="pmr-row" key={i}>
            <span className="pmr-left">
              <span className="pmr-ic">{it.icon ?? <IconMoney/>}</span>
              <span className="pmr-text">{it.texto}</span>
            </span>
            <span className="pmr-value">{brl(it.valor)}</span>
          </div>
        ))}

        {Array.from({ length: slotsVazios }).map((_, i) => (
          <div className="pmr-skel" key={`s${i}`} />
        ))}
      </div>
    </div>
  );
}

PainelMovimentacaoRecente.propTypes = {
  titulo: PropTypes.string,
  grupo: PropTypes.string,
  itens: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      texto: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired,
    })
  ),
  preencher: PropTypes.number,
};

function IconMoney(){
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#10b981"/>
      <path d="M12 7.5v9M9.75 10.5c.6-.9 1.5-1.5 2.25-1.5 1.65 0 3 1.05 3 2.25s-1.35 2.25-3 2.25-3 1.05-3 2.25c0 1.2 1.35 2.25 3 2.25 .9 0 1.8-.45 2.25-1.2"
            stroke="#064e3b" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}
