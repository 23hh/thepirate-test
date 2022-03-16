const Sequelize = require("sequelize");

module.exports = class Delivery extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        deliveryId: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        closing: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        price: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Delivery",
        tableName: "Delivery",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Delivery.belongsTo(db.Product, {
      foreignKey: "id",
      targetKey: "id",
      ondelete: "CASCADE",
    });
  }
};
