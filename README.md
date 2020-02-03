## Introduction

Express Sweather Weather is an Express API that consists of four endpoints. These endpoints are exposed when requested with a valid API key. The endpoints include location specific forecast data, the ability to add favorite locations, list favorite locations, and delete favorite locations. Weather data exposed in this API is from [Darksky API](https://darksky.net/dev) and locations are verified with [Google's Geocode API](https://developers.google.com/maps/documentation/geocoding/start).

## Initial Setup
You can `fork` or `clone` this repo. Once you have done that, you’ll need to run the following command below to get everything up and running.  

`npm install`

#### Set up your local database
To get things set up, you’ll need to access your Postgres instance by typing in `psql` into your terminal. Once there, you can create your database by running the comment `CREATE DATABASE PUT_DATABASE_NAME_HERE_dev;`. 

Now you have a database for your new project.

#### Migrations
Once you have your database setup, you’ll need to run some migrations (if you have any). You can do this by running the following command: 

`knex migrate:latest`


Instructions to create database, run migrations, and seed: 
```
psql
CREATE DATABASE DATABASE_NAME_dev;
\q

knex migrate:latest
knex seed:run
```

#### Set up your test database
Most of the setup is going to be same as the one you did before. You’ll notice one small difference with setting the environment flag to `test`.  

```
psql
CREATE DATABASE DATABASE_NAME_test;
\q

knex migrate:latest --env test
```
## Schema


## How to run tests
There are currently no tests associated with this repo. If you would like to create and run your own tests, you may do so with the following command: 

`npm test`

When the tests have completed, you’ll get a read out of how things panned out. 

## Tech Stack
- Node.js
- Express.js
- Knex.js
- Postgres
- Javascript ES6+

## Contributors
- [Laura Schulz](https://github.com/lrs8810)
