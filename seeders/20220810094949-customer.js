const Uuid = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        idCustomer: Uuid.v4(),
        name: 'Bima Agung Setya Budi',
        telp: 0837384,
        address: 'Pati',
        email: 'bimaagungsetya@gmail.com',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
