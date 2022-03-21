import express from 'express'
import bodyParser from 'body-parser'
import { getHouses } from './src/bff'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/gethouses', async (req, res, next) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const page = ((+req.query.page! as number) || 1) as number
  const houses = await getHouses(page)

  res.send(houses)
  next()
})

export const handler = app
