const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors({credentials:true,origin:'http://localhost:3000'}))

app.use(express.static('public'))

const UserRoutes = require('./routes/UserRoutes')
const BlogRoutes = require('./routes/BlogRoutes')
app.use('/users',UserRoutes)
app.use('/blog',BlogRoutes)


app.listen(8080)
