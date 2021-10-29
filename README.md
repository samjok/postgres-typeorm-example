# Node.js Project Base

This project base includes a Node.js backend app which uses PostgreSQL database. The app has API routes for registering new users and signing in. 
An authorization management is made by [Json Web Tokens](https://www.npmjs.com/package/jsonwebtoken). Access to API routes is controlled by auth and admin middlewares.

The app uses [TypeORM](https://typeorm.io/#/) for handling database queries.

## Development

This project is MIT licenced and you can use it as a base of your own projects. After cloning the repository you need to install npm packages with command "npm install" (or with yarn: "yarn install").

You need to make .env file which contains necessary environmental variables. Theres is .env-template file which you can use and rename it to ".env". 

You also need a PotgreSQL database installed on your machine and you need to add database configuration info on .env file.

First five variables on .env file are for [database configuration](https://typeorm.io/#/using-ormconfig/using-environment-variables).

JWT_SECRET variable is used as a seed for generating tokens and it is an arbitrary string. 

Last two variables are credentials of an admin user which can be initialized with POST request to path ```http://localhost:5000/api/user/init```.

You can run the app with nodemon using command "npm run watch". If everything is working you will see this text on your console:

```
Server is running on port 5000.
Server is connected to PostgreSQL database.
```
