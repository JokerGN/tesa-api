import Sequelize from 'sequelize'

export const database = new Sequelize('samofitm_tesa', 'test', 'gun23604', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  pool: {
    min: 0,
    max: 15
  },
  logging: false,
  dialectOptions: {
    socketPath: '/tmp/mysql.sock'
  }
})
