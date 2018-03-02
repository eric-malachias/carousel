const express = require('express')
const router = express.Router()
const images = require('./routes/images')

router.use(function (req, res, next) {
  // fake delay to simulate complex computing
  setTimeout(() => next(), 2000)
})
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  next()
})

router.use(images)

module.exports = router
