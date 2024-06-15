const { Router } = require('express')

const router = Router()

router.get('/users', (req, res) => {
  // archivo users en views
  res.render('users')
})

module.exports = router
