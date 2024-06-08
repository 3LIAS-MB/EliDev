import { BUTTONS } from "./consts.js";
import { navigate } from "./utils/navigate.js";

// La magia del 'props.children'
export function Link({ target, to, ...props }) { // resetScroll
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary; // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
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
