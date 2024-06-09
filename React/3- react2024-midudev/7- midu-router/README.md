-> Crear un React Router desde cero

- [x] Instalar el linter

- [x] Crear una forma de hacer MPA (Multiple Page Application)
      Una aplicación de múltiples páginas (MPA) es una arquitectura web tradicional donde cada cambio de vista o de página implica la carga completa de una nueva página desde el servidor. Cada página tiene su propio contenido HTML, CSS y JavaScript, y se recarga completamente cada vez que el usuario navega a una nueva página.

-> Características:

- Carga completa de página: Cada vez que se navega a una nueva página,
  el navegador realiza una solicitud HTTP al servidor para obtener y
  cargar una nueva página completa.
- URLs distintas: Cada página tiene su propia URL específica.
- SEO Friendly: Son amigables para los motores de búsqueda, ya que cada
  página es una entidad separada que puede ser indexada fácilmente.

-> Ventajas:

- SEO: Mejor SEO porque cada página puede ser indexada por motores de búsqueda.
- Simplicidad: Más fácil de desarrollar y mantener para sitios web pequeños y medianos.
- Seguridad: La separación de páginas puede ofrecer una mayor seguridad en algunos contextos.

Desventajas:

-> Rendimiento: Cada navegación implica una recarga completa de la página, lo que puede ser lento.
-> Experiencia de usuario: La experiencia de usuario puede
ser menos fluida debido a las recargas completas de página.

- [x] Crea una forma de hacer SPAs (Single Page Applications)
      Una aplicación de una sola página (SPA) es una arquitectura moderna de aplicaciones web donde toda la aplicación se carga inicialmente (o en partes según se necesite) y la navegación dentro de la aplicación no implica recargas completas de página. Las interacciones del usuario y las actualizaciones de la vista se manejan mediante JavaScript, lo que permite una experiencia de usuario más fluida y dinámica.

-> Características:

- Carga inicial: La aplicación se carga una vez y después solo
  se cargan los datos necesarios a través de solicitudes API.
- URLs manipuladas por JavaScript: Aunque la URL cambia para reflejar
  la navegación, no se realiza una recarga completa de página.
- Estado gestionado en el cliente: El estado de la aplicación se mantiene
  en el cliente, lo que permite una experiencia de usuario más rápida.

-> Ventajas:

Rendimiento: Mejor rendimiento una vez que la aplicación está
cargada, ya que no se requieren recargas completas de página.
Experiencia de usuario: Interfaz de usuario más fluida y
dinámica, similar a las aplicaciones de escritorio.
Desarrollo: Permite el uso de frameworks modernos como React, Angular,
y Vue.js que facilitan el desarrollo de interfaces complejas y dinámicas.

-> Desventajas:

- SEO: Dificultades con SEO porque el contenido no siempre está disponible para los
  rastreadores de motores de búsqueda sin configuraciones adicionales (aunque existen
  soluciones como renderizado en servidor y prerenderizado).
- Carga inicial: La carga inicial puede ser más lenta
  porque se carga una cantidad significativa de JavaScript.
- Manejo de estado: La gestión del estado de la aplicación puede ser
  compleja y requiere herramientas y patrones específicos
  (como Redux o Context API en React).

- [x] Poder navegar entre páginas con el botón de atrás
- [x] Crear componente Link para hacerlo declarativo
- [x] Crear componente Router para hacerlo más declarativo
- [x] Soportar ruta por defecto (404)
- [x] Soportar rutas con parámetros
- [x] Componente <Route /> para hacerlo declarativo
- [x] Lazy Loading de las rutas
- [x] Hacer un i18n con las rutas
- [] Testing
- [] Publicar el paquete en NPM
