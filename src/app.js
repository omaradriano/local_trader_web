import express from 'express'
import feedRoutes from './routes/feed.routes.js'
//Routes
//Controllers

//Esto se hace para configurar __dirname ya que no existe en ESModules
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url)).replace(/\\/g, '/');

const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// app.use('/prueba', express.static(__dirname + '/src/public'));
// app.use(express.static('/src/public'));
app.use(feedRoutes)

//Feed 
export default app