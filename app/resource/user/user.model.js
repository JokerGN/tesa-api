import Sequelize from 'sequelize'
import {database} from '../database'

let userModel = database.define('user', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  team: {
    type: Sequelize.STRING(33),
    allowNull: false
  },
  prefix: {
    type: Sequelize.STRING(6),
    allowNull: false
  },
  name_thai: {
    type: Sequelize.STRING(29),
    allowNull: false
  },
  name_eng: {
    type: Sequelize.STRING(15),
    allowNull: false
  },
  surname_eng: {
    type: Sequelize.STRING(19),
    allowNull: false
  },
  size: {
    type: Sequelize.STRING(4),
    allowNull: false
  },
  room: {
    type: Sequelize.STRING(14),
    allowNull: false
  },
  bed: {
    type: Sequelize.STRING(2),
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM,
    values: ['not_active', 'active'],
    defaultValue: ['not_active']
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },
  deletedAt: {
    type: Sequelize.DATE
  }
}, {
  tableName: 'user',
  freezeTableName: true,
  paranoid: true,
})

export default userModel
