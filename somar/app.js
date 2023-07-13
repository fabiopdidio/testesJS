function somar() {
  let num1 = document.getElementById("texto1");
  let num2 = document.getElementById("texto2");
  let n1 = Number(texto1.value);
  let n2 = Number(texto2.value);
  let soma = n1 + n2;
  resposta.innerHTML = `A soma entre ${n1} e ${n2} é ${soma}`
}
