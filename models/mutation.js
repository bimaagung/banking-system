const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mutation extends Model {
    static associate(models) {
      Mutation.belongsTo(models.Account, {
        foreignKey: 'idMutation',
        as: 'mutation',
      });
    }
  }
  Mutation.init(
    {
      idMutation: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          notEmpty: true,
          isUUID: true,
        },
      },
      idAccount: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: true,
          isUUID: true,
        },
      },
      type: {
        type: DataTypes.STRING(112),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING(225),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Mutation',
    },
  );
  return Mutation;
};
