import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import 'dotenv/config'
import Teasa from './app/api/Teasa'

const app = new Koa()
const router = new Router({prefix: process.env.BASE_URI})

app.use(bodyParser())
app.use(cors())

router.use('/teasa', Teasa.routes())

app.use(router.routes())
app.use(router.allowedMethods())

console.log('App listen at PORT '+process.env.PORT)
const server = app.listen(process.env.PORT)
