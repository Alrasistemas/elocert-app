// src/components/PainelMeuSaldo.jsx
import PropTypes from "prop-types";
import "../../css/PainelMeuSaldo.css";

function formatar(valor, moeda = "BRL", comCentavos = false) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: moeda,
    maximumFractionDigits: comCentavos ? 2 : 0,
    minimumFractionDigits: comCentavos ? 2 : 0,
  });
}

export default function PainelMeuSaldo({
  titulo = "Meu Saldo",
  valor = 0,
  moeda = "BRL",
  comCentavos = false,
  cor = "#1f6fff",
}) {
  return (
    <div className="pms-card" style={{ "--pms-bg": cor }}>
      <div className="pms-head">
        <span className="pms-title">{titulo}</span>
        <span className="pms-icon" aria-hidden="true">
          <IconMoney />
        </span>
      </div>
      <div className="pms-value">{formatar(valor, moeda, comCentavos)}</div>
    </div>
  );
}

PainelMeuSaldo.propTypes = {
  titulo: PropTypes.string,
  valor: PropTypes.number,
  moeda: PropTypes.string,     // "BRL", "USD" etc.
  comCentavos: PropTypes.bool, // true para mostrar centavos
  cor: PropTypes.string,       // cor de fundo do card
};

function IconMoney() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v9M9.75 9.75c.6-.75 1.5-1.2 2.25-1.2 1.65 0 3 1.05 3 2.4s-1.35 2.4-3 2.4-3 1.05-3 2.4c0 1.32 1.29 2.4 3 2.4 .84 0 1.71-.36 2.25-1.05" />
    </svg>
  );
}
