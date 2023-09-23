Before running the code run migration command:

    => npx sequelize-cli db:migrate

this will create the database tables.
Time Estimation => 0.042 seconds.

After the database has been created run cmmand:

    => npx sequelize-cli db:seed:all

this will populate the tables with the data present in hostaway API for the first time.
Time Estimation =>  595.334 seconds. (because of calendar data storage)




