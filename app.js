const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const schoolRoutes = require('./routes/schoolRoutes')
const app = express()
const { createTable } = require('./models/schoolModel')

createTable()
  .then(() => console.log('Table created'))
  .catch(err => console.error(err))
  
dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/api', schoolRoutes)

app.get('/', (req, res) => {
  res.send('API Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})