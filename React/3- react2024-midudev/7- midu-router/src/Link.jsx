import { EVENTS } from "./consts.js";

// Esta función es utilizada para cambiar la URL de la página sin recargarla,
// utilizando la API del Historial del Navegador, y luego despachar un
// evento de navegación personalizado

// -> El primer parámetro ({}): Es el estado asociado con la nueva
// entrada del historial. En este caso, es un objeto vacío, pero
// podría contener datos relevantes para la nueva URL.
// -> El segundo parámetro (''): Es el título de la nueva entrada del
// historial. Actualmente, los navegadores lo ignoran, así que se
// suele pasar una cadena vacía.
// -> El tercer parámetro (href): Es la nueva URL que se quiere
// establecer en la barra de direcciones del navegador.

export function navigate(href) {
    // no hay una forma nativa de poder escuchar el evento 'pushState()'. Sí hay
    // una forma de escuchar cuando es hacia atrás, pero para hacia delante, no hay
    window.history.pushState({}, "", href);
    // creando un evento personalizado
    const navigationEvent = new Event(EVENTS.PUSHSTATE);
    window.dispatchEvent(navigationEvent);
  }