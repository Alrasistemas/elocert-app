import "../../css/PainelCertificados.css";

export default function PainelCertificados({rowsCertificado}) {


  return (
    <div className="painel-certificados">
      <div className="painel-header">
        Certificados a expirar nos próximos 30 dias
      </div>

      <div className="painel-body">
        <div className="painel-head">
          <div>Validade</div>
          <div>Cliente</div>
          <div>Cnpj|Cpf</div>
          <div className="right">Tipo</div>
        </div>

        <div className="painel-list">
          {rowsCertificado.length ? (
            rowsCertificado.map((r, i) => (
              <div key={i} className={`painel-row ${i % 2 ? "alt" : ""}`}>
                <div className="validade">{r.validade}</div>
                <div className="cliente">{r.cliente}</div>
                <div className="doc">{r.doc}</div>
                <div className="tipo">{r.tipo}</div>
              </div>
            ))
          ) : (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="placeholder" />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
