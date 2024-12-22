"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Todos", "userID", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "UserCredentials",
        key: "id",
      },
    });
    await queryInterface.addColumn("Todos", "public", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Todos", "userId");
    await queryInterface.removeColumn("Todos", "public");
  },
};
