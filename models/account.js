const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      Account.belongsTo(models.Customer, {
        foreignKey: 'idCustomer',
        as: 'customer',
      });
      Account.hasMany(models.Mutation, {
        foreignKey: 'idMutation',
        as: 'mutations',
      });
      Account.belongsTo(models.BranchOffice, {
        foreignKey: 'idBranch',
        as: 'branch',
      });
    }
  }
  Account.init(
    {
      idAccount: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          notEmpty: true,
          isUUID: true,
        },
      },
      saldo: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      idBranch: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: true,
          isUUID: true,
        },
      },
      idCustomer: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: true,
          isUUID: true,
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
      modelName: 'Account',
    },
  );
  return Account;
};
