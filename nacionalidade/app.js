function calcular() {
  const txt = document.getElementById("txt");
  const res = document.getElementById("res");
  const nacao = txt.value;
  res.innerHTML = `Você é de ${nacao}.`;
}
