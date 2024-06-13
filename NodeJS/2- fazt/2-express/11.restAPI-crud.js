const express = require('express')
const morgan = require('morgan')

const app = express()
let products = [
  {
    id: 1,
    name: 'laptop',
    price: 3000
  }
]

app.use(morgan('dev'))
app.use(express.json()) // antes -> app.use(bodyParser.json())

/**/

app.get('/products', (req, res) => {
  res.json(products)
})

/**/

app.post('/products', (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 }
  products.push(newProduct)
  res.send('creando products')
})

/**/

app.put('/products', (req, res) => {
  const newData = req.body
  const productFound = products.find(product => product.id === parseInt(req.params.id))

  if (!productFound) {
    return res.status(404).json({
      message: 'Product not found'
    })
  }

  products = products.map(product => product.id === parseInt(req.params.id)
    ? { ...product, ...newData }
    : product)

  res.json({
    message: 'Product update succesfully'
  })
})

/**/

app.delete('/products/:id', (req, res) => {
  const productFound = products.find((product) => { // function (product) {
    return product.id === parseInt(req.params.id)
  })

  if (!productFound) {
    return res.status(404).json({
      message: 'Product not found'
    })
  }

  products = products.filter(product => product.id !== parseInt(req.params.id))
  console.log('eliminando producto')
  res.sendStatus(204) // -> todo fue bien pero no duvuelve nada
})

/**/

app.get('/products/:id', (req, res) => {
  const productFound = products.find(product => product.id === parseInt(req.params.id))

  if (!productFound) {
    return res.status(404).json({
      message: 'Product not found'
    })
  }
  console.log('obteniendo un producto')
  res.json(productFound)
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
