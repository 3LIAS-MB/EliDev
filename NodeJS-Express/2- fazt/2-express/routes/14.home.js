// function HomeRoutes (app) {
//   app.all('/about', (req, res) => {
//     res.send('about page')
//   })

//   app.get('/dashboard', (req, res) => {
//     res.send('dashboard page')
//   })
// }

// module.exports = HomeRoutes

/**/

// -> Lo mismo y más común
// const express = require('express')
// const router = express.Router()

const { Router } = require('express')
const axios = require('axios')

const router = Router()

router.get('/', (req, res) => {
  const title = 'index page'
  const isActive = true

  const users = [
    {
      id: 1,
      name: 'ryan',
      lastname: 'perez'
    },
    {
      id: 1,
      name: 'joe',
      lastname: 'mac millan'
    }
  ]

  // "para crear una pagina usamos el render"
  res.render('index', { title, isActive, users }) // { title: "index page"}
})

router.get('/about', (req, res) => {
  // enviar html con .ejs
  // nombre del artichivo: 'index'
  res.render('about')
  // res.send('about page')
})

router.get('/dashboard', async (req, res) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  res.render('dashboard', {
    posts: response.data
  })
})

module.exports = router
