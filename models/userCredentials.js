const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const UserCredentials = sequelize.define(
  "UserCredentials", 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = UserCredentials;
