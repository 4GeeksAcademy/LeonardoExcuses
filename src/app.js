function excusasF1() {
  const quien = [
    "Fernando Alonso",
    "Max Verstappen",
    "Lewis Hamilton",
    "Lando Norris",
    "Sergio Pérez",
    "Carlos Sainz Jr"
  ];
  const accion = [
    " chocó con ",
    " pasó por la izquierda de ",
    " pasó por la derecha de ",
    " esquivó en el último minuto a "
  ];
  const cosa = [
    "un mecánico",
    "un neumático",
    "un rezagado",
    "un aficionado que saltó a la pista"
  ];
  const lugar = [
    " en Imola.",
    " en Suzuka.",
    " en Monza.",
    " en Barcelona.",
    " en Nürburgring.",
    " en Silverstone."
  ];

  const quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
  const accionAleatorio = accion[Math.floor(Math.random() * accion.length)];
  const cosaAleatorio = cosa[Math.floor(Math.random() * cosa.length)];
  const lugarAleatorio = lugar[Math.floor(Math.random() * lugar.length)];

  const excusaFinal =
    quienAleatorio + accionAleatorio + cosaAleatorio + lugarAleatorio;

  document.getElementById("excusaFinal").innerText = excusaFinal;

  return excusaFinal;
}
