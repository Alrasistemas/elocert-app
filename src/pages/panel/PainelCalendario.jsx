import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "../../css/PainelCalendario.css";
import { ptBR } from "date-fns/locale";

export default function PainelCalendario() {
  return (
    <div className="painel-calendario">
      <DayPicker mode="single" locale={ptBR}/>
    </div>
  );
}
