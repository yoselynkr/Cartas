import { jugador } from "./ModeloJugador.js";

export class InterfazJugador {
  constructor(app) {
    this.app = app;
    this.IJugador = document.getElementById("interfazJugador");
    this.IJugador.hidden = true;
    this.INombre = document.getElementById("INombre");
    this.ICarta1 = document.getElementById("ICarta1");
    this.ICarta2 = document.getElementById("ICarta2");
    this.ICarta3 = document.getElementById("ICarta3");
    this.botonAceptar = document.getElementById("botonAceptar");
    this.botonAceptar.onclick = () => this.agregarJugador();
  }
  mostrar() {
    this.IJugador.hidden = false;
  }
  ocultar() {
    this.IJugador.hidden = true;
  }
  agregarJugador() {
    let j = new jugador({
      nombre: this.INombre.value,
      carta1: this.ICarta1.value,
      carta2: this.ICarta2.value,
      carta3: this.ICarta3.value,
    });
    this.app.juego.procesarJugador(j);
    this.app.InterfazJuego.reporteJugador(j);
    this.ocultar();
    this.app.InterfazJuego.mostrar();
  }
}
