import "../../css/PainelAlerta.css";

export default function PainelAlerta() {
  return (
    <div className="painel-alerta">
      <div className="painel-titulo">Alerta Pendência</div>

      <div className="painel-conteudo">
        <div className="painel-subtitulo">Pedidos com pendência</div>
        <p className="painel-texto">
          Há pedidos parados devido a pendências. Verifique e regularize para dar
          andamento ao atendimento.
        </p>

        <div className="painel-botoes">
          <button className="botao-fechar">Fechar</button>
          <button className="botao-verificar">Verificar</button>
        </div>
      </div>
    </div>
  );
}
