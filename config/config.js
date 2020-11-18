require("dotenv").config();

module.exports = {
  development: {
    username: "db6ssv114mja2dq0",
    password: "u48mbskwnj6vbuiu",
    database: "znjg49dtttcdw87e",
    host: "d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "mustafa",
    database: "project_db",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
