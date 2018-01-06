import Router from 'koa-router'
import UserRepository from '../resource/user/user.repository'

const Teasa = new Router()

Teasa.post('/getdata', async function (context, next) {
  let data = context.request.body
  let where = {
    name_eng: data.firstName.toLowerCase(),
    surname_eng: data.lastName.toLowerCase()
  }
  await UserRepository.findBy(where)
  .spread((user) => {
    if (user) {
      if (user.status == 'active') {
        let message = {
          userStatus: user.status,
          message: 'this user already active'
        }
        context.body = user
      } else {
        UserRepository.updateBy(where, {status: 'active'})
        context.body = user
      }
    } else {
      context.status = 404
      context.message = JSON.stringify({
        error: 'not found user'
      })
    }
  })
})

export default Teasa
