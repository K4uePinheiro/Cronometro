let milissegundos = 0;
  let segundos = 0;
  let minutos = 0;
  let intervalo;

  function atualizarDisplay() {
    let m = minutos < 10 ? "0" + minutos : minutos;
    let s = segundos < 10 ? "0" + segundos : segundos;
    let ms = milissegundos < 10 ? "0" + milissegundos : milissegundos;
    document.getElementById("counter").innerText = `${m}:${s}.${ms}`;
  }

  function start() {
    if (!intervalo) {
      intervalo = setInterval(() => {
        milissegundos++;
        if (milissegundos === 100) { // 100 ms = 1 segundo
          milissegundos = 0;
          segundos++;
        }
        if (segundos === 60) {
          segundos = 0;
          minutos++;
        }
        atualizarDisplay();
      }, 10); // Atualiza a cada 10ms
    }
  }

  function pause() {
    clearInterval(intervalo);
    intervalo = null;
  }

  function stop() {
    clearInterval(intervalo);
    intervalo = null;
    milissegundos = 0;
    segundos = 0;
    minutos = 0;
    atualizarDisplay();
  }

  atualizarDisplay();