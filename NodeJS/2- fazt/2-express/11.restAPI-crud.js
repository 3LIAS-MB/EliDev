const express = require('express')
const morgan = require('morgan')

const app = express()
const products = [
  {
    id: 1,
    name: 'laptop',
    price: 3000
  }
]

app.use(morgan('dev'))
app.use(express.json()) // antes -> app.use(bodyParser.json())

app.get('/products', (req, res) => {
  res.json(products)
})

app.post('/products', (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 }
  products.push(newProduct)
  res.send('creando products')
})

// app.put('/products', (req, res) => {
//   res.send('actualizando products')
// })

// app.delete('/products', (req, res) => {
//   res.send('eliminando products')
// })

app.get('/products/:id', (req, res) => {
  const productFound = products.find((product) => { // function (product) {
    return product.id === parseInt(req.params.id)
  })

  if (!productFound) {
    return res.status(404).json({
      message: 'Product not found'
    })
  }
  res.json(productFound) // 'obteniendo un producto'
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
