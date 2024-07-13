'use strict';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert('events', [
      {
        event_id: 3, // Ensure this value is unique
        name: 'Concert A',
        date: new Date('2023-08-01'),
        start_time: new Date('2023-08-01T19:00:00'),
        end_time: new Date('2023-08-01T22:00:00'),
      },
      {
        event_id: 4, // Ensure this value is unique
        name: 'Concert B',
        date: new Date('2023-09-01'),
        start_time: new Date('2023-09-01T20:00:00'),
        end_time: new Date('2023-09-01T23:00:00'),
      }
      // Add more seed data as needed
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('events', null, {});
  }
};
