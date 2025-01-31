'use strict';
const { hashPassword } = require('../helpers/bcrypt');
const fs = require('fs').promises;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(await fs.readFile('./data/users.json', 'utf-8'));
    
    for (const user of data) {
      delete user.id;
      user.password = await hashPassword(user.password);
      user.createdAt = user.updatedAt = new Date();
    }

    await queryInterface.bulkInsert('Users', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};