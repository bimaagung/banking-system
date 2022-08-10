'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BranchOffice extends Model {
    static associate(models) {
      BranchOffice.belongsTo(models.Account, {
        foreignKey: 'idBranch',
        as: 'branch',
      });
    }
  }
  BranchOffice.init(
    {
      idBranch: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          notEmpty: true,
          isUUID: true,
        },
      },
      nameBranch: {
        type: DataTypes.STRING(225),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      telpBranch: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        validate: {
          notEmpty: true,
          isInt,
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
      modelName: 'BranchOffice',
    },
  );
  return BranchOffice;
};
