
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import "../../css/PainelComparativoGanhoMensais.css";


const MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

export default function PainelComparativoGanhoMensais({
  titulo = "Comparativo de Ganhos Mensais",
  anoAtual = [],
  anoAnterior = [],
}) {
  const data = MESES.map((m, i) => ({
    mes: m,
    atual: Number(anoAtual[i] ?? 0),
    anterior: Number(anoAnterior[i] ?? 0),
  }));

  return (
    <div className="pcgm-card">
      <div className="pcgm-title">{titulo}</div>
      <div className="pcgm-chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6} barCategoryGap={12}>
            <CartesianGrid vertical={false} stroke="#eef2f7" />
            <XAxis dataKey="mes" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v)=>`R$ ${v}`} />
            <Tooltip
              cursor={{ fill: "rgba(31,111,255,0.06)" }}
              formatter={(v)=>[`R$ ${Number(v).toLocaleString("pt-BR")}`, ""]}
              labelFormatter={(l)=>`Mês: ${l}`}
              contentStyle={{ borderRadius: 10, border: "1px solid #e5e7eb" }}
            />
            <Bar dataKey="anterior" name="Ano anterior" radius={[6,6,0,0]} className="pcgm-bar-anterior" />
            <Bar dataKey="atual" name="Ano atual"     radius={[6,6,0,0]} className="pcgm-bar-atual" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

PainelComparativoGanhoMensais.propTypes = {
  titulo: PropTypes.string,
  anoAtual: PropTypes.arrayOf(PropTypes.number),    // 12 valores
  anoAnterior: PropTypes.arrayOf(PropTypes.number), // 12 valores
};
