# Sistema de encuesta

Este programa permite crear encuestas con preguntas y opciones, recopilar las respuestas y mostrar los resultados.
Se ha implementado **dos paradigmas de programación**, dividido en 2 carpetas:

1. 📁 **PF** utilizando **Programación Funcional (PF).**
2. 📁 **POO** utilizando **Programación Orientada a Objetos (POO).**

# ¿Cómo funciona?

### 🚀 Programación Funcional (PF)

1. **pedirNumero(mensaje, minimo = 1):** Solicita un número al usuario, validando que sea un número válido y mayor o igual al valor mínimo.

2. **crearEncuesta(numero):** Crea una nueva encuesta, solicita su título, el número de preguntas (mínimo 8) y las opciones de respuesta. Luego, muestra un resumen de la encuesta creada.

3. **crearTodasLasEncuestas():** Pide al usuario cuántas encuestas quiere crear y usa crearEncuesta(numero) para generarlas todas. Devuelve un array con las encuestas creadas.

4. **votar(encuestas):** Recorre todas las encuestas y permite que el usuario seleccione una opción válida para cada pregunta. Guarda los resultados sumando los votos.

5. **mostrarResultados(encuestas):** Muestra el número de votos obtenidos para cada pregunta en cada encuesta, utilizando alert() para presentar los datos.

## Conceptos clave

- **Funciones Puras**: Las funciones trabajan con datos sin modificar el estado global.
- **Uso de `map()` y `forEach()`**: Se manipulan las encuestas sin necesidad de estructuras mutables.
- **Interacción con el usuario**: Se usa `prompt()` y `alert()` para recibir y mostrar información.

---
---
---

### 🚀 Programación Orientada a Objetos (POO)

## clases

1. **class Pregunta:** Representa una pregunta dentro de la encuesta. Contiene el texto de la pregunta y sus posibles opciones de respuesta.

2. **class Encuesta:** Administra todo el sistema de encuestas. Permite agregar preguntas, registrar respuestas y mostrar los resultados.

## Métodos

1. **agregarPregunta():** Solicita al usuario una nueva pregunta y sus opciones. Luego, la almacena dentro de la encuesta.

2. **definirNumeroEncuestas():** Pide al usuario cuántas encuestas quiere crear y valida que ingrese un número válido.

3. **votar():** Muestra las encuestas creadas, permite que el usuario vote por una opción y registra los resultados.

4. **mostrarResultados():** Presenta los votos obtenidos en cada pregunta y muestra los resultados en pantalla.

## Conceptos clave

- **Clases y Objetos**: Se usan clases (`Encuesta` y `Pregunta`) para estructurar el programa.
- **Métodos**: Se utilizan funciones dentro de las clases para definir el comportamiento (como `agregarPregunta()` y `mostrarResultados()`).
- **Interacción con el usuario**: Se usa `prompt()` y `alert()` para solicitar y mostrar información.

---
---
---

## Autor

❤️ Este código fue desarrollado en un **80% por Marco Rubio Bustos, 20% por el apoyo de AI**.
