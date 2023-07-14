function calcular() {
  const txtv = document.getElementById("txtvel");
  let res = document.getElementById("res");
  let vel = Number(txtv.value);
  if (vel > 60) {
    res.innerHTML = "Você foi multado, dirija com segurança";
  } else {
    res.innerHTML = `Sua velocidade atual é de ${vel}Km/h`;
  }
}
