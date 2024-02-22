import { juego } from "./modelo juego.js";
import { InterfazJuego } from "./vista jugador.js";
import { InterfazJugador } from "./VistaJugador.js";
class principal {
  constructor() {
    this.juego = new juego();
    this.InterfazJugador = new InterfazJugador(this);
    this.InterfazJuego = new InterfazJuego(this);
  }
}
export default principal;
