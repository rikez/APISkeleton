const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const consign = require('consign')
const env = require('dotenv')
const expressValidator = require('express-validator')

/**
 * Loading Environtment Variables
 */
env.config()

/**
 * JSON & URL ENCODED CONFIG
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * Enabling CORS
 */
app.use('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.set('clr', require('colors'))

app.use(expressValidator());

consign({cwd: 'app'})
  .include('/middlewares')
  .then('/models')
  .then('/services')
  .then('/controllers')
  .then('routes.js')
  .into(app)

module.exports = app
