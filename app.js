const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

console.log('PORT', PORT)

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line no-console
})
