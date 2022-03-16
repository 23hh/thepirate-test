const Sequelize = require("sequelize");
const Product = require("./product");
const Delivery = require("./delivery");
const Option = require("./option");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;

db.Product = Product;
db.Delivery = Delivery;
db.Option = Option;

Product.init(sequelize);
Delivery.init(sequelize);
Option.init(sequelize);

Product.associate(db);
Delivery.associate(db);
Option.associate(db);

module.exports = db;
