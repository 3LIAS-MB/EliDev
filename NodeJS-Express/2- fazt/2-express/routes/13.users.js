// function UserRoutes (app) {
//   app.get('/userName', (req, res) => {
//     res.send('Username Route')
//   })

//   app.get('/profile', (req, res) => {
//     res.send('Profile Page')
//   })
// }

// module.exports = UserRoutes

/* TRABAJA CON 13.express-router.js */

const express = require('express')
// Este objeto va a incluir a todos
// los metodos para despues exportarlo
// -> esto es lo mismo pero sin usar una función
// -> puede llamarse como sea pero más común 'router'
const router = express.Router()

router.get('/userName', (req, res) => {
  res.send('Username Route')
})

router.get('/profile', (req, res) => {
  res.send('Profile Page')
})

module.exports = router
