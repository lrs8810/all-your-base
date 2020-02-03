## Introduction

Express Sweather Weather is an Express API that consists of four endpoints. These endpoints are exposed when requested with a valid API key. The endpoints include location specific forecast data, the ability to add favorite locations, list favorite locations, and delete favorite locations. Weather data exposed in this API is from [Darksky API](https://darksky.net/dev) and locations are verified with [Google's Geocode API](https://developers.google.com/maps/documentation/geocoding/start).

## Initial Setup
#### Dependencies
You can `fork` or `clone` this repo. Once you have done that, you’ll need to run the following command below to get everything up and running.  

`npm install`

#### Set up your local database
This project uses a postgres data. You’ll need to access your own Postgres instance by typing in `psql` into your terminal. Once there, you can create your database by running the command `CREATE DATABASE sweater_weather_dev;` You can also change the name of the database to that of your choosing, but also update it in the `knexfile.js` within the root of the project. 

#### Migrations
Once you have your database setup, you can run the two migrations for your `users` and `favorites` tables. Please see the Schema below for more information. You can do this by running the following command: 

`knex migrate:latest`

You can also seed the database with one user by running the following command: 

`knex seed:run`

#### API keys
As mentioned before, this project consumes the [Darksky API](https://darksky.net/dev) and [Google's Geocode API](https://developers.google.com/maps/documentation/geocoding/start) endpoints. You will need to create a `dotenv` file and store your API keys in there are `GOOGLE_API_KEY=key` and `DARKSKY_API_KEY=key` respectively. 

## Endpoints 
#### Favoriting a City 
Requests will be accepted as follows: 
```
GET /api/v1/forecast?location=denver,co
Content-Type: application/json
Accept: application/json

body:
{
  "api_key": "123456"
}
```
Sample response will include 8 hourly results and 7 daily results: 
```
{
  "location": "Denver, C0",
  "currently": {
      "summary": "Overcast",
      "icon": "cloudy",
      "precipIntensity": 0,
      "precipProbability": 0,
      "temperature": 54.91,
      "humidity": 0.65,
      "pressure": 1020.51,
      "windSpeed": 11.91,
      "windGust": 23.39,
      "windBearing": 294,
      "cloudCover": 1,
      "visibility": 9.12,
    },
  "hourly": {
    "summary": "Partly cloudy throughout the day and breezy this evening.",
    "icon": "wind",
    "data": [
      {
      "time": 1555016400,
      "summary": "Overcast",
      "icon": "cloudy",
      "precipIntensity": 0,
      "precipProbability": 0,
      "temperature": 54.9,
      "humidity": 0.65,
      "pressure": 1020.8,
      "windSpeed": 11.3,
      "windGust": 22.64,
      "windBearing": 293,
      "cloudCover": 1,
      "visibility": 9.02,
      },
    ]
  },
  "daily": {
    "summary": "No precipitation throughout the week, with high temperatures bottoming out at 58°F on Monday.",
    "icon": "clear-day",
    "data": [
      {
        "time": 1554966000,
        "summary": "Partly cloudy throughout the day and breezy in the evening.",
        "icon": "wind",
        "sunriseTime": 1554990063,
        "sunsetTime": 1555036947,
        "precipIntensity": 0.0001,
        "precipIntensityMax": 0.0011,
        "precipIntensityMaxTime": 1555045200,
        "precipProbability": 0.11,
        "precipType": "rain",
        "temperatureHigh": 57.07,
        "temperatureLow": 51.47,
        "humidity": 0.66,
        "pressure": 1020.5,
        "windSpeed": 10.94,
        "windGust": 33.93,
        "cloudCover": 0.38,
        "visibility": 9.51,
        "temperatureMin": 53.49,
        "temperatureMax": 58.44,
      },
    ]
  }
}
```

#### Favoriting Locations
Requests will be accepted as follows: 
```
POST /api/v1/favorites
Content-Type: application/json
Accept: application/json

body:

{
  "location": "Denver, CO",
  "api_key": "123456"
}
```
Sample response: 
```
status: 200
body:

{
  "message": "Denver, CO has been added to your favorites",
}
```
#### Listing Favorite Locations
Requests will be accepted as follows: 
```
GET /api/v1/favorites
Content-Type: application/json
Accept: application/json

body:

{
  "api_key": "123456"
}
```
Sample response: 
```
status: 200
body:
[
  {
    "location": "Denver, CO",
    "current_weather": {
      "summary": "Overcast",
      "icon": "cloudy",
      "precipIntensity": 0,
      "precipProbability": 0,
      "temperature": 54.91,
      "humidity": 0.65,
      "pressure": 1020.51,
      "windSpeed": 11.91,
      "windGust": 23.39,
      "windBearing": 294,
      "cloudCover": 1,
      "visibility": 9.12,
    },
    "location": "Golden, CO",
    "current_weather": {
      "summary": "Sunny",
      "icon": "sunny",
      "precipIntensity": 0,
      "precipProbability": 0,
      "temperature": 71.00,
      "humidity": 0.50,
      "pressure": 1015.10,
      "windSpeed": 10.16,
      "windGust": 13.40,
      "windBearing": 200,
      "cloudCover": 0,
      "visibility": 8.11,
    }
  }
]
```
#### Removing Favorite Locations
Requests will be accepted as follows: 
```
DELETE /api/v1/favorites
Content-Type: application/json
Accept: application/json

body:

{
  "location": "Denver, CO",
  "api_key": "123456"
}
```
Sample response: 
```
status: 204
```

## Schema
<img width="1015" src="https://i.imgur.com/5nFVOb9.png">

## Tech Stack
- Node.js
- Express.js
- Knex.js
- Postgres
- Javascript ES6+

## Contributors
- [Laura Schulz](https://github.com/lrs8810)
