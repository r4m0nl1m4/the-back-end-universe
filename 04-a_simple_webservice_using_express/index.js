const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.json({'msg':'Hello from Express!'})
})

app.listen(8080, () => {
  console.log('Server ready on port 8080!')
})