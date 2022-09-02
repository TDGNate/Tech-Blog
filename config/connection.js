const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

// Check for heroku Jaws 
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Use my local db 
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306
    }
  );
}

module.exports = sequelize;