const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./route')

const app = express()
// const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(router)

app.listen(3000, () => {
  console.log(`server is listening on 3000 port`)
})
