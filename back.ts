import express from 'express'
import bodyParser from 'body-parser'
import { getHouses } from './src/bff'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/gethouses', async (_req, res, next) => {
  const houses = await getHouses()
  res.send(houses)

  next()
})

export const handler = app
