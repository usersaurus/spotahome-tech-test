import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/test', (_req, res, next) => {
  res.send('It works :)')
  next()
})

export const handler = app
