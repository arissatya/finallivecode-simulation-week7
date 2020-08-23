'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Inventories', [
      {
        "id": 1,
        "name": "Apple Mac Mini 2018 MRTR2 Space Grey Quad Core i3 SSD 128 GB",
        "price": 12990000,
        "quantity": 20,
        "status": "Bagus",
        "UserId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 2,
        "name": "led Monitor Acer Eb192Q",
        "price": 825000,
        "quantity": 20,
        "status": "Bagus",
        "UserId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Inventories', null, {});
  }
};
