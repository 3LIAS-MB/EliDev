import { BUTTONS, EVENTS } from "./consts.js";

// Esta función es utilizada para cambiar la URL de la página sin recargarla,
// utilizando la API del Historial del Navegador, y luego despachar un
// evento de navegación personalizado

// -> El primer parámetro ({}): Es el estado asociado con la nueva
// entrada del historial. En este caso, es u  n objeto vacío, pero
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

// La magia del 'props.children'
export function Link({ resetScroll, target, to, ...props }) {
  const handleClick = (event) => {
    console.log('button: ' + event.button)
    const isMainEvent = event.button === BUTTONS.primary; // 0
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      // El comportamiento que tiene por defecto el
      // enlace (anchor) es recargar la pagina
      event.preventDefault();
      navigate(to); // navegación con SPA
      window.scrollTo(0, 0)
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />; // children={props.children}
}
