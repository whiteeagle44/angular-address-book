import express from "express"
import * as process from "process";
import * as mongoose from "mongoose";
import bodyParser from "body-parser";
import ContactRouter from "@router/ContactRouter";
import ApiErrorHandler from "@middleware/ApiErrorHandler";

require('dotenv').config()

mongoose.connect(process.env.DB_URL as string)
  .then(() => {
    console.log('Connected to database')
  })
  .catch((err) => {
    console.error(`Error connecting to database: ${err}`)
  })
const app = express()

app.use(bodyParser.json())
app.use('/contacts', ContactRouter)
app.use(ApiErrorHandler)

export const port = 3000
app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
