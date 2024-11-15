// Importing modules
const express = require('express')
const path = require('path')
const cors = require('cors') //read client web applications that are loaded in one domain

// Importing router
const { router } = require('./routers')

// Importing dbConfigs from knexfile
const dbConfigs = require('./knexfile')
const knex = require('knex')(dbConfigs)

// Define express app
const app = express()
const port = 3000

// Setting the ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine' ,'ejs')


// Enable the express app to parase JSON body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Express App
app.use('/', router)

app.listen(port, () => {
    console.log(`App running on host ${port}`)
})
