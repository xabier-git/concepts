module.exports = {
    HOST: "mysql.container",
    USER: "root",
    PASSWORD: "almaveloz",
    DB: "tutoriales",
    PORT: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };