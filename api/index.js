const express = require('express')
const app = express()
const api = require('./api')

// no cache for this demo
app.disable('etag')

app.use('/api', api)
app.use(express.static('../web/docroot'))

app.listen(3000, () => console.log('Server running on http://localhost:3000.'))
