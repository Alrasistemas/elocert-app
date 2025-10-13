// src/components/PainelGanhoMes.jsx
import PropTypes from "prop-types";
import "../../css/PainelGanhoMes.css";

function fmtBRL(v) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export default function PainelGanhoMes({ titulo = "Ganho do Mês", valor = 0, icon }) {
  return (
    <div className="pgm-card">
      <div className="pgm-head">
        <span className="pgm-title">{titulo}</span>
        <span className="pgm-icon">{icon ?? <IconMoney />}</span>
      </div>
      <div className="pgm-value">{fmtBRL(valor)}</div>
    </div>
  );
}

PainelGanhoMes.propTypes = {
  titulo: PropTypes.string,
  valor: PropTypes.number, // ex.: 500
  icon: PropTypes.node,    // opcional: sobrescreve o ícone
};

// ícone SVG simples, pode trocar por seu <img/>
function IconMoney() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor" opacity="0.15"/>
      <rect x="3.5" y="7.5" width="17" height="9" rx="1.5" stroke="currentColor" fill="none" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" fill="none" />
      <path d="M7 9h2M15 15h2" stroke="currentColor" />
    </svg>
  );
}
