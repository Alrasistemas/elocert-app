import "../../css/PainelSidebar.css";
import dlogo from "../../image/dlogo.svg"; 
import dcalendario from "../../image/dcalendario.svg"; 
import drelatorio from "../../image/drelatorio.svg"; 
import mao from "../../image/mao.svg"; 
import engrenagem from "../../image/engrenagem.svg"; 
import interrogacao from "../../image/interrogacao.svg"; 
import casa from "../../image/casa.svg"; 
import logof from "../../image/logof.svg"; 

export function PainelSidebar({ onSelect = () => {} } = {}) {
  let wrap = document.querySelector('[data-sidebar="main"]');
  if (wrap) return api(wrap, onSelect);

  wrap = document.createElement("nav");
  wrap.className = "sidebar";
 

 const mkBtn = (title, key, imgSrc) => {
  const b = document.createElement("button");
  b.type = "button";
  b.title = title;
  b.dataset.key = key;
  b.className = "sidebar-btn";

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = title;
  img.className = "sidebar-icon";

  b.appendChild(img);
  b.addEventListener("click", () => setActive(key));
  return b;
};


  // logo topo
const logo = document.createElement("img");
logo.src = dlogo;
logo.alt = "Logo Elocert";
logo.className = "sidebar-logo";
wrap.appendChild(logo);



  // grupo de ícones
  const group = document.createElement("div");
  group.className = "sidebar-group";

  const icons = {
    home: casa,
    agenda: dcalendario,
    rel: drelatorio,
    users: mao,
    cfg: engrenagem,
    help: interrogacao,
    exit: logof,
  };

  const btns = [
    mkBtn("Início", "home",   icons.home),
    mkBtn("Agenda", "agenda", icons.agenda),
    mkBtn("Relatórios","rel", icons.rel),
    mkBtn("Usuários","users", icons.users),
    mkBtn("Config","cfg",     icons.cfg),
  ];
  btns.forEach(b => group.appendChild(b));
  wrap.appendChild(group);

  // base
  const spacer = document.createElement("div");
  spacer.className = "sidebar-spacer";
  wrap.appendChild(spacer);
  const help = mkBtn("Ajuda","help",icons.help);
  const exit = mkBtn("Sair","exit",icons.exit);
  wrap.append(help, exit);

  let active = "home";
 function paint() {
  wrap.querySelectorAll(".sidebar-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.key === active);
  });
}
  function setActive(key) { active = key; paint(); onSelect(key); }

  // eventos
  wrap.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-key]");
    if (!b) return;
    setActive(b.dataset.key);
  });

  paint();
  document.body.appendChild(wrap);
  return api(wrap, onSelect);

  function api(root) {
    return { root, setActive, get active(){ return active; } };
  }
}
