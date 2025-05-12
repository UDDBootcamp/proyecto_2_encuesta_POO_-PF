// Programación funcional (PF)
const pedirNumero = (mensaje, minimo = 1) => {
  let numero;
  do {
    numero = parseInt(prompt(mensaje));
  } while (isNaN(numero) || numero < minimo);
  return numero;
};

// Se crea encuesta
const crearEncuesta = (numero) => {
  const titulo = prompt(`Ingrese la encuesta número ${numero}:`);
  const cantidadOpciones = pedirNumero(
    "Ingrese la cantidad de preguntas (mínimo 8):",
    8
  );

  const opciones = {};
  for (let i = 0; i < cantidadOpciones; i++) {
    const opcion = prompt(`Ingrese la pregunta número ${i + 1}:`);
    opciones[opcion] = 0;
  }

  // Mostrar resumen de la encuesta
  let resumen = `Encuesta número ${numero} creada: \n${titulo}\n\n Opciones:\n`;
  for (let opcion in opciones) {
    resumen += `- ${opcion}\n`;
  }
  alert(resumen);
  return { titulo, opciones };
};

// Se crean las encuestas
const crearTodasLasEncuestas = () => {
  const cantidad = parseInt(
    pedirNumero("Primero, indique la cantidad de encuestas que va a crear:")
  );

  const encuestas = [];
  for (let i = 1; i <= cantidad; i++) {
    encuestas.push(crearEncuesta(i));
  }
  return encuestas;
};

const votar = (encuestas) => {
  alert("Se crearon las encuestas, ahora respóndalas por favor");

  return encuestas.map((encuesta) => {
    const opcionesTexto = Object.keys(encuesta.opciones).join(", ");
    let respuesta;
    do {
      respuesta = prompt(`${encuesta.titulo}\n Opciones: ${opcionesTexto}`);
      if (!encuesta.opciones.hasOwnProperty(respuesta)) {
        alert(
          "Se indicó una respuesta que no existe, por favor ingrese una opción válida"
        );
      }
    } while (!encuesta.opciones.hasOwnProperty(respuesta));

    return {
      ...encuesta,
      opciones: {
        ...encuesta.opciones,
        [respuesta]: encuesta.opciones[respuesta] + 1,
      },
    };
  });
};

// Mostrar los resultados
const mostrarResultados = (encuestas) => {
  alert("Resultado de las encuestas:");
  encuestas.forEach((encuesta) => {
    let resultado = `Pregunta: ${encuesta.titulo}\n`;
    for (let opcion in encuesta.opciones) {
      resultado += `${opcion}: ${encuesta.opciones[opcion]} votos\n`;
    }
    alert(resultado);
  });
};

const encuestas = crearTodasLasEncuestas();
const encuestasConVotos = votar(encuestas);
mostrarResultados(encuestasConVotos);
