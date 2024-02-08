// server.js
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // import cors for cross-origin resource sharing 

const app = express()

app.use(cors()) // use cors middleware
app.use(bodyParser.json())

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body

  // Validate the data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)

  // Send a response
  res.json({ success: true })
})

app.listen(3000, () => console.log('Server running on port 3000'))