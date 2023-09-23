# Hostaway_DB

After you have created a database user. Go to config/config.json.

copy the following code and enter all the relavent credentials to establish a connection with database.
"development": {
"username": <enter username here>,
"password": <enter password here>,
"database": <enter server name here>,
"host": "127.0.0.1",
"dialect": <enter database here> eg "postgres"
},

1 --> run command

    npm install

to install all the dedendencieds available in package.json file

2 --> run command

    npm run migrate

to create the tale in the database

3 --> run command

    npm run undo-migrate

to remove all the tables in the database

4 --> run command

    npm run seed

to initially populate the tables with the most recent records available in hostaway api

5 --> run command

    npm run undo-seed

to remove all the records from the database

6 --> after you are done with the migration and seeding run the code using command

    npm start

this will start the development mode for you to work on the code
