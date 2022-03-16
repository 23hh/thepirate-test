const Sequelize = require("sequelize");

module.exports = class Option extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        optionId: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        price: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        stock: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Option",
        tableName: "Options",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Option.belongsTo(db.Product, {
      foreignKey: "id",
      targetKey: "id",
      ondelete: "CASCADE",
    });
  }
};
