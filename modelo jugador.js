export class jugador {
    constructor({ nombre, carta1, carta2, carta3 }) {
      this.nombre = nombre;
      this.carta1 = carta1;
      this.carta2 = carta2;
      this.carta3 = carta3;
    }
    set carta1(c1) {
      this._carta1 = +c1;
    }
    get carta1() {
      return this._carta1;
    }
    set carta2(c2) {
      this._carta2 = +c2;
    }
    get carta2() {
      return this._carta2;
    }
    set carta3(c3) {
      this._carta3 = +c3;
    }
    get carta3() {
      return this._carta3;
    }
  
    puntuacionFinal() {
      return this.carta1 + this.carta2 + this.carta3;
    }
  }
  