// src/components/PesquisaPedidos.jsx
import { useMemo, useState } from "react";
import "../../css/PesquisaPedido.css";

const SITUACOES = [
  "Todas",
  "Pendência",
  "Aprovado",
  "Sem retorno",
  "Cancelado",
  "Em análise",
  "Reagendar",
  "Pagamento",
];

const TIPOS = ["Ecnpj", "Ecpf"];

// dd/mm/aaaa -> Date | null
function parseBR(d) {
  if (!d) return null;
  const [dd, mm, yyyy] = d.split("/").map(Number);
  if (!dd || !mm || !yyyy) return null;
  const dt = new Date(yyyy, mm - 1, dd);
  return Number.isNaN(dt.getTime()) ? null : dt;
}

// remove acentos e baixa caixa
function norm(x) {
  return (x || "")
    .toString()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export default function PesquisaPedidos() {
  const [de, setDe] = useState("");
  const [ate, setAte] = useState("");
  const [situacao, setSituacao] = useState("Todas");
  const [q, setQ] = useState("");
  const [tipoNovo, setTipoNovo] = useState("Ecnpj");

  const dados = useMemo(
    () => [
      {
        pedido: "0000001",
        data: "01/10/2025",
        cliente: "Razão Social Cliente",
        doc: "00.000.000/0000-00",
        tipo: "Ecnpj",
        status: "Pendência",
      },
      {
        pedido: "0000002",
        data: "02/10/2025",
        cliente: "Empresa Exemplo LTDA",
        doc: "11.111.111/1111-11",
        tipo: "Ecnpj",
        status: "Aprovado",
      },
      {
        pedido: "0000003",
        data: "03/10/2025",
        cliente: "Fulano da Silva",
        doc: "123.456.789-00",
        tipo: "Ecpf",
        status: "Sem retorno",
      },
      {
        pedido: "0000004",
        data: "04/10/2025",
        cliente: "Cliente Teste",
        doc: "22.222.222/2222-22",
        tipo: "Ecnpj",
        status: "Em análise",
      },
      {
        pedido: "0000005",
        data: "05/10/2025",
        cliente: "Outro Cliente",
        doc: "333.333.333-33",
        tipo: "Ecpf",
        status: "Pagamento",
      },
    ],
    []
  );

  const lista = useMemo(() => {
    const dIni = parseBR(de);
    const dFim = parseBR(ate);
    const nq = norm(q);
    const nsit = norm(situacao);

    return dados
      .filter((r) => {
        if (situacao === "Todas") return true;
        return norm(r.status).includes(nsit);
      })
      .filter((r) => {
        if (!nq) return true;
        const alvo = norm(`${r.pedido} ${r.cliente} ${r.doc}`);
        return alvo.includes(nq);
      })
      .filter((r) => {
        const d = parseBR(r.data);
        if (dIni && d && d < dIni) return false;
        if (dFim && d && d > dFim) return false;
        return true;
      });
  }, [dados, de, ate, situacao, q]);

  function onNovo() {
    // troque por sua navegação/ação real
    alert(`Novo pedido (${tipoNovo})`);
  }

  return (
    <div className="pp-container">
      {/* Filtros */}
      <div className="pp-filters">
        <div className="pp-field">
          <label className="pp-label" htmlFor="pp-de">De</label>
          <input
            id="pp-de"
            className="pp-input"
            placeholder="dd/mm/aaaa"
            value={de}
            onChange={(e) => setDe(e.target.value)}
          />
        </div>

        <div className="pp-field">
          <label className="pp-label" htmlFor="pp-ate">Até</label>
          <input
            id="pp-ate"
            className="pp-input"
            placeholder="dd/mm/aaaa"
            value={ate}
            onChange={(e) => setAte(e.target.value)}
          />
        </div>

        <div className="pp-field">
          <label className="pp-label" htmlFor="pp-sit">Situação</label>
          <select
            id="pp-sit"
            className="pp-select"
            value={situacao}
            onChange={(e) => setSituacao(e.target.value)}
          >
            {SITUACOES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="pp-field pp-grow">
          <input
            className="pp-input"
            placeholder="Pedido, cliente ou documento…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <div className="pp-actions">
          <button className="pp-btn" onClick={onNovo}>NOVO</button>
          <select
            className="pp-select pp-select--compact"
            value={tipoNovo}
            onChange={(e) => setTipoNovo(e.target.value)}
          >
            {TIPOS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabela */}
      <div className="pp-table-wrapper">
        <table className="pp-table">
          <thead className="pp-thead">
            <tr>
              <th>Pedido</th>
              <th>Data</th>
              <th>Cliente</th>
              <th>CNPJ/CPF</th>
              <th>Tipo</th>
              <th>Status</th>
              <th className="pp-col-acoes">Ações</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((r) => (
              <tr key={r.pedido} className="pp-row">
                <td>{r.pedido}</td>
                <td>{r.data}</td>
                <td>{r.cliente}</td>
                <td>{r.doc}</td>
                <td>{r.tipo}</td>
                <td>
                  <span className={`pp-badge ${norm(r.status).includes('aprovado') ? 'pp-badge--ok'
                    : norm(r.status).includes('pendenc') ? 'pp-badge--warn'
                    : norm(r.status).includes('cancel') ? 'pp-badge--err'
                    : 'pp-badge--neutral'}`}>
                    {r.status}
                  </span>
                </td>
                <td className="pp-acoes">
                  <button className="pp-iconbtn" title="Visualizar">👁️</button>
                  <button className="pp-iconbtn" title="Editar">✏️</button>
                  <button className="pp-iconbtn" title="Excluir">🗑️</button>
                </td>
              </tr>
            ))}
            {!lista.length && (
              <tr>
                <td className="pp-empty" colSpan={7}>Nenhum pedido encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
