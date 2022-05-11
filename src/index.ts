import express from 'express'

import diaryRouter from './routes/diaries' // ESModules
const app = express()
const PORT = 3001

// middleware
app.use(express.json())
// transforma lo que venga del req.body a un json

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running in the port ${PORT}`)
})
