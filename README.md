# AirBnB Listing REST API

A REST API made with Node that returns AirBnB listings from MongoDB Atlas Sample Dataset. It can also filter the results based on the passed parameters.

## Installation and setup

### Installation

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install
```

### Running the application

```sh
$ npm start
```

### Running the application in dev mode

Dev mode utilizes [nodemon](https://nodemon.io/) which allows continuous monitoring for changes made in the app.

```sh
$ npm run dev
```

### Opening the application

By default, the application is listening to port 3000.

```sh
http://localhost:3000/
```

### Environment Variables

An .env file containing the environment variables needed by the application to run needs to be created in the root directory.

```sh
# .env

# MongoDB Atlas database URL for the cluster and collection
DATABASE_URL = <MongoDB Atlas database URL>

# Port which the application is listening to (optional)
PORT=3000
```

## MongoDB Atlas Sample AirBnB Listings Dataset

This API utilizes the [MongoDB Atlas Sample AirBnB Listings Dataset](https://www.mongodb.com/docs/atlas/sample-data/sample-airbnb/)

You are required to create a MongoDB Atlas account to access the dataset. You can then load the sample data into your MongoDB Atlas Cluster. See [Load Sample Data](https://www.mongodb.com/docs/atlas/sample-data/#load-sample-data).

## API Requests

[Postman](https://www.postman.com/) can be used to make the API requests.

### Get listings

```http
GET {{base_url}}/api
```

| Parameter      | Type     | Description                                                     |
| :------------- | :------- | :-------------------------------------------------------------- |
| `page`         | `Number` | **Optional**. Page number. Default: 0                           |
| `limit`        | `Number` | **Optional**. Number of listings returned per page. Default: 10 |
| `numberOfBed`  | `Number` | **Optional**. Filter by number of beds                          |
| `propertyType` | `string` | **Optional**. Filter by property type                           |
| `minPrice`     | `Number` | **Optional**. Filter by min price                               |
| `maxPrice`     | `Number` | **Optional**. Filter by max price                               |

### Get listing by id

```http
GET {{base_url}}/api/:id
```

## Responses

When listings are found, an array containing the listings will be returned. Sample response:

```js
[
    {
        "images": {
            ...
        },
        ...
        "_id": "",
        ...
        "beds": 1,
        ...
        "price": 100,
        ...
        "reviews": [
            ...
        ]
    },
    ...
]
```

If there are no listings found based on the parameters sent, then a JSON response containing a message indicating that there were no listings found.

```json
{
    "message": "No listing found"
}
```

If there are any errors encountered during the processing of request, a JSON response containing the error message is returned.

```json
{
    "message": <error message>
}
```

## Status Codes

The API returns the following status codes:
| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 500 | `INTERNAL SERVER ERROR` |
