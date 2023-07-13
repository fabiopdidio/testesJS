let a = document.getElementById("area");
a.addEventListener("click", clicar);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", sair);

function clicar() {
  area.innerText = "Clicou!";
  area.style.background = "grey";
}
function entrar() {
  area.innerText = "Entrou!";
  area.style.background = "green";
}
function sair() {
  area.innerText = "Saiu!";
  area.style.background = "red";
}
