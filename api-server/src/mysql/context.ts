import { Sequelize } from "sequelize-typescript";

export const HeyTeachContext = new Sequelize({
  database: "heyteach",
  username: "root",
  password: "secret",
  dialect: "mysql",
  host: "192.168.99.100",
  port: 3306,
  models: [__dirname + "/models"]
});
