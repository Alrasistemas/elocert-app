import "../../css/PainelDestaque.css";

export default function PainelDestaque({tituloTexto, valorTexto }) {
  return (
    <div className="painel-destaque">
      <div className="painel-destaque-valor">{valorTexto}</div>
      <div className="painel-destaque-titulo">{tituloTexto}</div>
    </div>
  );
}
