Configure database in config/config.json
Replace database credentials with that of yours.

Install all the dependencies:

    npm install

Seed database:

    sequelize db:seed:all

It will seed database with 20 users. Users have emails as : user1@task.com , user2@task.com ..... user20@task.com.
All users has the same password that is: "secret".

To run the app:

    npm start