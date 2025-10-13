import { useEffect, useRef, useState } from "react";
import { PainelSidebar } from "./panel/PainelSidebar.jsx";
import "../css/Dashboard.css"
import PainelDestaque from "./panel/PainelDestaque.jsx";
import PainelAtendimentos from "./panel/PainelAtendimentos.jsx";
import PainelCertificados from "./panel/PainelCertificados.jsx"
import PainelCalendario from "./panel/PainelCalendario.jsx"
import PainelGanhos from "./panel/PainelGanhos.jsx"
import PainelAgendados from "./panel/PainelAgendados.jsx"
import PainelAlerta from "./panel/PainelAlerta.jsx"
import PesquisaPedido from "./panel/PesquisaPedido.jsx"
import PainelGanhoMes from "./panel/PainelGanhoMes.jsx"
import PainelMeuSaldo from "./panel/PainelMeuSaldo.jsx"
import PainelMovimentacaoRecente from "./panel/PainelMovimentacaoRecente.jsx"
import PainelComparativoGanhoMensais from "./panel/PainelComparativoGanhoMensais.jsx"

export default function Dashboard() {


  const [view, setView] = useState("home"); // "home" | "agenda" | ...
  const sidebarRef = useRef(null);

  useEffect(() => {
    const api = PainelSidebar({
      onSelect: (key) => setView(key), // ← muda a view ao clicar
    });
    sidebarRef.current = api;
    return () => {
      api?.root?.remove(); // se desmontar, remove a sidebar do DOM
    };
  }, []);




  const tituloDaJanela = "BEM VINDO Fabio!";

  const valorTextoDestaque1 = 28;
  const valorTextoDestaque2 = 50;
  const valorTextoDestaque3 = 2;
  const valorTextoDestaque4 = 80;

  const ganhoTotal = 5000;
  const ganhoECNPJ = 3500;


  const rowsAtend = [
    { data: "08/10", cliente: "Meneses bla bla bla", tipo: "Ecnpj" },
    { data: "08/10", cliente: "Razão social do cliente", tipo: "Ecnpj" },
    { data: "08/10", cliente: "Razão social do cliente", tipo: "Ecnpj" },
    { data: "08/10", cliente: "Razão social do cliente", tipo: "Ecnpj" },
    { data: "08/10", cliente: "Razão social do cliente", tipo: "Ecnpj" },
    { data: "08/10", cliente: "Razão social do cliente", tipo: "Ecnpj" },
    { data: "08/10", cliente: "Razão social do cliente", tipo: "Ecnpj" }
  ];

  const rowsCertificado = [
    { validade: "30/10/2025", cliente: "Razão social Cliente", doc: "00.000.000/0000-00", tipo: "Ecnpj" },
    { validade: "30/10/2025", cliente: "Razão social Cliente", doc: "00.000.000/0000-00", tipo: "Ecnpj" },
    { validade: "30/10/2025", cliente: "Razão social Cliente", doc: "00.000.000/0000-00", tipo: "Ecnpj" },
    { validade: "30/10/2025", cliente: "Razão social Cliente", doc: "00.000.000/0000-00", tipo: "Ecnpj" }

  ];

  const agendItens = Array.from({ length: 6 }).map(() => ({
    hora: "08:00",
    cliente: "Razão Social do cliente",
  }));

  const agendLabel = "02 Out";

  /*      <PainelComparativoGanhoMensais
anoAnterior={[1200,1600,1500,1800,1100,900,1700,800,200,50,20,40]}
anoAtual={[900,1400,1300,700,1600,1800,1100,1700,150,10,5,15]}
/>*/
  if (view === "rel") {
    return (
      <div className="dash-grid-principal">
      <div className="dash-grid-esquerda">
          <h2>MEUS RELATORIO</h2>
            <PainelGanhoMes />
          <PainelMeuSaldo />
          <PainelMovimentacaoRecente />

        </div>
      </div>
    );
  }



  // VIEW = "agenda" → mostra PesquisaPedido
  if (view === "agenda") {
    return (
     <div>
      <div>
          <h2>MEUS PEDIDOS</h2>
          <PesquisaPedido />
        </div>
      </div>
    );
  }

  // VIEW padrão (home)
  return (
    <div className="dash-grid-principal">
      <div className="dash-grid-esquerda">
        <h2>{tituloDaJanela}</h2>

        <PainelDestaque tituloTexto="Agendados" valorTexto={valorTextoDestaque1} />
        <PainelDestaque tituloTexto="Atendidos" valorTexto={valorTextoDestaque2} />
        <PainelDestaque tituloTexto="Cancelados" valorTexto={valorTextoDestaque3} />
        <PainelDestaque tituloTexto="Total Registros" valorTexto={valorTextoDestaque4} />

        <PainelGanhos total={ganhoTotal} ganhoCnpj={ganhoECNPJ} />
        <PainelAtendimentos rowsAtendimento={rowsAtend} />
        <PainelCertificados rowsCertificado={rowsCertificado} />
      </div>

      <div className="dash-grid-direita">
        <PainelCalendario />
        <PainelAgendados agendItens={agendItens} agendLabel={agendLabel} />
        <PainelAlerta />
      </div>
    </div>
  );

}
