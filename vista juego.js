export class InterfazJuego {
    constructor(app) {
      this.app = app;
      this.IJuego = document.getElementById("interfazJuego");
      this.tablaJuego = document.getElementById("tablaJuego");
      this.leerPorcentajeMenosDe10 = document.getElementById(
        "leerPorcentajeMenosDe10"
      );
      this.leerNombreGanador = document.getElementById("leerNombreGanador");
      this.botonAgregar = document.getElementById("agregar");
      this.botonAgregar.onclick = () => {
        this.ocultar();
        this.app.InterfazJugador.mostrar();
      };
    }
    mostrar() {
      this.IJuego.hidden = false;
    }
    ocultar() {
      this.IJuego.hidden = true;
    }
    reporteJugador(j) {
      this.tablaJuego.innerHTML += `
        <tr>
          <td>${j.nombre}</td>
          <td>${j.carta1}</td>
          <td>${j.carta2}</td>
          <td>${j.carta3}</td>
          <td>${j.puntuacionFinal()}</td>
        </tr>`;
      this.leerPorcentajeMenosDe10.innerHTML =
        this.app.juego.porcentajeMenosDe10();
      this.leerNombreGanador.innerHTML = this.app.juego.nombreGanador;
    }
  }
  