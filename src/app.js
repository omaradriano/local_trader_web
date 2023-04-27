import express from 'express'
//Routes
import feedRoutes from './routes/feed.routes.js'
import signinRoutes from './routes/signin.routes.js'
import loginRoutes from './routes/login.routes.js'
//Instancia App
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
//Archivos estáticos
app.use(express.static('public'))
app.use(express.static('bootstrap'))

//Motor de plantillas
app.set('views', 'src/public')
app.set('view engine', 'ejs')


//Feed routes
app.use(signinRoutes)
app.use(feedRoutes)
app.use(loginRoutes)

export default app