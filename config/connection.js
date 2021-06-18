require('dotenv').config();

const Sequelize = require('sequelize');

// hold instance of Sequelize/connection to database
// db_name, username, password
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('ecommerce_db', 'root', 'Superstrongpassword3!', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;