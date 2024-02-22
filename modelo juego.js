export class juego {
    constructor(nG) {
      this.contTotal = 0;
      this.contMenosDe10 = 0;
      this.mayorPuntuacion = 0;
      this.nombreGanador = nG;
    }
    procesarJugador(j) {
      this.contTotal++;
      if (j.puntuacionFinal() <= 10) this.contMenosDe10++;
      if (j.puntuacionFinal() > this.mayorPuntuacion) {
        this.mayorPuntuacion = j.puntuacionFinal();
        this.nombreGanador = j.nombre;
      }
    }
    porcentajeMenosDe10() {
      return (this.contMenosDe10 / this.contTotal) * 100;
    }
  }
  