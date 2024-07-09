import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:1234',
  'https://movies.com',
  'https://midu.dev'
]

// La función origin es una opción de configuración proporcionada por la dependencia cors.
// Se usa para definir qué orígenes están permitidos para realizar solicitudes a tu servidor,
// implementando así un control de acceso granular sobre quién puede interactuar con tus recurso

// -> La opción origin en cors puede ser configurada de diferentes maneras:

// 1. Valor booleano:
// Si se establece en true, todas las solicitudes están permitidas.
// Si se establece en false, todas las solicitudes están bloqueadas.

// 2. Cadena de texto:
// Si se proporciona una cadena de texto (e.g., 'http://example.com'),
// solo las solicitudes desde ese origen están permitidas.

// 3. Función:
// Se puede proporcionar una función para realizar una verificación
// personalizada. Esta función recibe dos parámetros: origin y callback.
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    // Si la solicitud no tiene origen (por ejemplo, una solicitud
    // desde la misma máquina), también se permite la solicitud.
    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})
