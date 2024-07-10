import express from 'express'
import logger from 'morgan'
import dotenv from 'dotenv'
import { createClient } from '@libsql/client'
// Importamos la creacion de un servidor de web socket
import { Server } from 'socket.io'
// Modulo par apoder crear servidores http
import { createServer } from 'node:http'

import mysql from 'mysql2/promise'

dotenv.config()

const port = process.env.PORT ?? 3000
// también es un servidor http
const app = express()
const server = createServer(app)
// Esto lo hacemos para tener todo en un solo servidor
// Express y Web Socket juntos en un solo sitio
const io = new Server(server, {
  connectionStateRecovery: {}
})

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'S436339133xd',
  database: 'chat_realtime'
}

const db = await mysql.createConnection(DEFAULT_CONFIG)

await db.execute(`
  CREATE TABLE IF NOT EXISTS messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT,
    user TEXT
  )
`)

io.on('connection', async (socket) => {
  console.log('a user has connected!')

  socket.on('disconnect', () => {
    console.log('an user has disconnected')
  })

  socket.on('chat message', async (msg) => {
    let result
    const username = socket.handshake.auth.username ?? 'anonymous'
    console.log({ username })
    try {
      [result] = await db.execute('INSERT INTO messages (content, user) VALUES (?, ?)', [msg, username])
    } catch (e) {
      console.error(e)
      return
    }

    io.emit('chat message', msg, result.insertId.toString(), username)
  })

  if (!socket.recovered) { // <- recuperase los mensajes sin conexión
    try {
      const [results] = await db.execute('SELECT id, content, user FROM messages WHERE id > ?', [socket.handshake.auth.serverOffset ?? 0])

      results.forEach(row => {
        socket.emit('chat message', row.content, row.id.toString(), row.user)
      })
    } catch (e) {
      console.error(e)
    }
  }
})

app.use(logger('dev'))

app.get('/', (req, res) => {
  // process.cwd() -> la carpeta en la que se inicializó el proceso
  res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`)
})
