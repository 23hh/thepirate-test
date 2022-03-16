const Sequelize = require("sequelize");

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Product",
        tableName: "Products",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Product.hasOne(db.Delivery, {
      foreignKey: "id",
      sourceKey: "id",
    });
    db.Product.hasMany(db.Option, {
      foreignKey: "id",
      sourceKey: "id",
    });
  }
};
