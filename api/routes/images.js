const express = require('express')
const router = express.Router()
const catImages = require('../images/cats')
const sharkImages = require('../images/sharks')
const { mergeRandomly } = require('../helpers/array')

function getImageList (cats, sharks) {
  if (!cats && !sharks) {
    return []
  }

  if (cats && sharks) {
    return mergeRandomly(catImages, sharkImages)
  }

  if (cats) {
    return catImages
  }

  return sharkImages
}

router.get('/images', function (req, res) {
  const list = getImageList(req.query.cats === 'true', req.query.sharks === 'true')

  res.json(list)
})

module.exports = router
