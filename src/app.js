import express from 'express'
//Routes
import feedRoutes from './routes/feed.routes.js'
//Instancia App
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
//Archivos estáticos
app.use(express.static('public'))
app.use(express.static('bootstrap'))

//Feed routes
app.use(feedRoutes)

export default app