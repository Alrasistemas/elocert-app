import "../../css/PainelAtendimento.css"


export default function PainelAtendimentos({rowsAtendimento }) {

  return (
    <div className="atendimento-painel">
      <div className="atendimento-painel-header">Atendimentos da semana</div>

      <div className="atendimento-painel-body">
        <div className="atendimento-painel-head">
          <div>Data</div>
          <div>Cliente</div>
          <div className="atendimento-right">Tipo</div>
        </div>

        <div className="atendimento-painel-list">
          {rowsAtendimento.length > 0 ? (
            rowsAtendimento.map((r, i) => (
              <div key={i} className={`atendimento-painel-row ${i % 2 ? "alt" : ""}`}>
                <div className="atendimento-data">{r.data}</div>
                <div className="atendimento-cliente">{r.cliente}</div>
                <div className="atendimento-tipo">{r.tipo}</div>
              </div>
            ))
          ) : (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="atendimento-placeholder" />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
