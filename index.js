import express from 'express'
import bodyParser from 'body-parser'

import apiRoutes from './routes/api.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/api', apiRoutes)

app.get('/', (req, res) => res.send('Hello Homepage'))

app.listen(PORT, () => console.log(`Server run on port: http://localhost:${PORT}`))