import express from 'express'
import session from 'express-session'
import flash from 'connect-flash'

//Routes
import feedRoutes from './routes/feed.routes.js'
import signupRoutes from './routes/signup.routes.js'
import loginRoutes from './routes/login.routes.js'
import profileRoutes from './routes/profile.routes.js'
//Instancia App
const app = express()

//Para dar soporte a los datos que llegan por medio del usuario. Serán usados en request
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(session({
    secret: 'privateKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000,
    }
}))
app.use(flash())

//Archivos estáticos
app.use(express.static('public'))
app.use(express.static('bootstrap'))

//Motor de plantillas
app.set('views', 'src/public')
app.set('view engine', 'ejs')

//Feed routes
app.use(feedRoutes)
//Signup routes
app.use(signupRoutes)
//Login routes
app.use(loginRoutes)
//Profile
app.use(profileRoutes)

export default app