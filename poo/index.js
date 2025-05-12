// Programación orientada a objetos (POO)
class Encuesta {
  constructor(titulo) {
    this.titulo = titulo;
    this.preguntas = [];
    this.resultados = [];
    this.numeroEncuestas = 0;
  }

  definirNumeroEncuestas() {
    while (true) {
      let numero = parseInt(
        prompt("Primero, indique la cantidad de encuestas que va a crear:")
      );
      if (!isNaN(numero) && numero > 0) {
        this.numeroEncuestas = numero;
        break;
      }
      alert("Por favor, ingrese un número válido.");
    }
  }

  agregarPregunta() {
    let numeroEncuesta = this.preguntas.length + 1;
    let texto = prompt(`Ingrese la encuesta número ${numeroEncuesta}:`);
    let opciones = {};

    let cantidadOpciones;
    while (true) {
      cantidadOpciones = parseInt(
        prompt("Ingrese la cantidad de preguntas (mínimo 8):")
      );

      if (!isNaN(cantidadOpciones) && cantidadOpciones >= 8) {
        break;
      }
      alert("Debe ingresar al menos 8 preguntas.");
    }

    for (let i = 0; i < cantidadOpciones; i++) {
      let opcion = prompt(`Ingrese la pregunta número ${i + 1}:`);
      opciones[opcion] = 0;
    }

    let nuevaPregunta = new Pregunta(texto, opciones);
    this.preguntas.push(nuevaPregunta);
    this.resultados.push({});

    let mensaje = `Encuesta número ${numeroEncuesta} creada: \n${texto} \n\nOpciones:\n`;
    for (let opcion in opciones) {
      mensaje += `- ${opcion}\n`;
    }
    alert(mensaje);
  }

  votar() {
    alert(this.titulo);
    this.preguntas.forEach((pregunta, index) => {
      let opcionesTexto = Object.keys(pregunta.opciones).join(", ");
      let respuesta;

      while (true) {
        respuesta = prompt(`${pregunta.texto}\nOpciones: ${opcionesTexto}`);
        if (pregunta.opciones.hasOwnProperty(respuesta)) {
          break;
        }
        alert(
          "Se indicó una respuesta que no existe, por favor ingrese una opción válida"
        );
      }

      this.resultados[index][respuesta] =
        (this.resultados[index][respuesta] || 0) + 1;
    });
  }

  mostrarResultados() {
    alert("Resultado de las encuestas:");
    this.preguntas.forEach((pregunta, index) => {
      let resultadoTexto = `Pregunta: ${pregunta.texto}\n`;
      for (let opcion in pregunta.opciones) {
        let votos = this.resultados[index][opcion] || 0;
        resultadoTexto += `${opcion}: ${votos} votos\n`;
      }
      alert(resultadoTexto);
    });
  }
}

class Pregunta {
  constructor(texto, opciones) {
    this.texto = texto;
    this.opciones = opciones;
  }
}

let encuesta = new Encuesta(
  "Se crearon las encuestas, ahora respóndalas por favor."
);
encuesta.definirNumeroEncuestas();

for (let i = 0; i < encuesta.numeroEncuestas; i++) {
  encuesta.agregarPregunta();
}

encuesta.votar();
encuesta.mostrarResultados();
