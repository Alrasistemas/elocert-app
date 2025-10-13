import "../../css/PainelAgendados.css";

export default function PainelAgendados({agendLabel, agendItens}) {


  return (
    <div className="painel-agendados">
      <div className="titulo">Agendados Hoje</div>

      <div className="data-linha">
        <span>{agendLabel}</span>
        <span className="linha" />
      </div>

      <ul className="lista">
        {agendItens.map((it, i) => (
          <li key={i} className="item">
            <span className="hora">{it.hora}</span>
            <span className="barra" />
            <span className="cliente">{it.cliente}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
