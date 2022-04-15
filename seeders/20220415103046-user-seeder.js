'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  
  async up (queryInterface, Sequelize) {
    const password = "secret";
    const hash = bcrypt.hashSync(password, 12);

     return queryInterface.bulkInsert('users', [
       {
         id : '0001',
         firstName: 'User',
         surName: '1',
         username: 'user1',
         email: 'user1@task.com',
         password: hash,
         dob: '1990-06-10',
         age: '21',
         createdAt : '2020-04-15',
         updatedAt : '2020-04-15'
       },
       {
        id : '0002',
        firstName: 'User',
        surName: '2',
        username: 'user2',
        email: 'user2@task.com',
        password: hash,
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },
      {
        id : '0003',
        firstName: 'User',
        surName: '3',
        username: hash,
        email: 'user3@task.com',
        password: 'user3',
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },
      {
        id : '0004',
        firstName: 'User',
        surName: '4',
        username: hash,
        email: 'user4@task.com',
        password: 'user4',
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },
      {
        id : '0005',
        firstName: 'User',
        surName: '5',
        username: hash,
        email: 'user5@task.com',
        password: 'user5',
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },
      {
        id : '0006',
        firstName: 'User',
        surName: '6',
        username: 'user6',
        email: 'user6@task.com',
        password: hash,
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },
      {
        id : '0007',
        firstName: 'User',
        surName: '7',
        username: 'user7',
        email: 'user7@task.com',
        password: hash,
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },
      {
        id : '0008',
        firstName: 'User',
        surName: '8',
        username: 'user8',
        email: 'user8@task.com',
        password: hash,
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },
      {
        id : '0009',
        firstName: 'User',
        surName: '9',
        username: 'user9',
        email: 'user9@task.com',
        password: hash,
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },
      {
        id : '0010',
        firstName: 'User',
        surName: '10',
        username: 'user10',
        email: 'user10@task.com',
        password: hash,
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },

      {
        id : '00011',
        firstName: 'User',
        surName: '11',
        username: 'user11',
        email: 'user11@task.com',
        password: hash,
        dob: '1990-06-10',
        age: '21',
        createdAt : '2020-04-15',
        updatedAt : '2020-04-15'
      },
      {
       id : '00012',
       firstName: 'User',
       surName: '12',
       username: 'user12',
       email: 'user12@task.com',
       password: hash,
       dob: '1990-06-10',
       age: '21',
       createdAt : '2020-04-15',
       updatedAt : '2020-04-15'
     },
     {
       id : '00013',
       firstName: 'User',
       surName: '13',
       username: 'user13',
       email: 'user13@task.com',
       password: hash,
       dob: '1990-06-10',
       age: '21',
       createdAt : '2020-04-15',
       updatedAt : '2020-04-15'
     },
     {
       id : '00014',
       firstName: 'User',
       surName: '14',
       username: 'user14',
       email: 'user14@task.com',
       password: hash,
       dob: '1990-06-10',
       age: '21',
       createdAt : '2020-04-15',
       updatedAt : '2020-04-15'
     },
     {
       id : '00015',
       firstName: 'User',
       surName: '15',
       username: 'user15',
       email: 'user15@task.com',
       password: hash,
       dob: '1990-06-10',
       age: '21',
       createdAt : '2020-04-15',
       updatedAt : '2020-04-15'
     },
     {
       id : '00016',
       firstName: 'User',
       surName: '16',
       username: 'user16',
       email: 'user16@task.com',
       password: hash,
       dob: '1990-06-10',
       age: '21',
       createdAt : '2020-04-15',
       updatedAt : '2020-04-15'
     },
     {
       id : '00017',
       firstName: 'User',
       surName: '17',
       username: 'user17',
       email: 'user17@task.com',
       password: hash,
       dob: '1990-06-10',
       age: '21',
       createdAt : '2020-04-15',
       updatedAt : '2020-04-15'
     },
     {
       id : '00018',
       firstName: 'User',
       surName: '18',
       username: 'user18',
       email: 'user18@task.com',
       password: hash,
       dob: '1990-06-10',
       age: '21',
       createdAt : '2020-04-15',
       updatedAt : '2020-04-15'
     },
     {
       id : '00019',
       firstName: 'User',
       surName: '19',
       username: 'user19',
       email: 'user19@task.com',
       password: hash,
       dob: '1990-06-10',
       age: '21',
       createdAt : '2020-04-15',
       updatedAt : '2020-04-15'
     },
     {
       id : '0020',
       firstName: 'User',
       surName: '20',
       username: 'user20',
       email: 'user20@task.com',
       password: hash,
       dob: '1990-06-10',
       age: '21',
       createdAt : '2020-04-15',
       updatedAt : '2020-04-15'
     },
     
     ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', {}, null);

  }
};
