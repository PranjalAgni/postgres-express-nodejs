const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: db.host,
  database: db.name,
  username: db.username,
  password: null,
  logging: console.log,
});

const models = {
  User: require('./user')(sequelize, DataTypes),
  Notes: require('./notes')(sequelize, DataTypes),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { sequelize, models };
