# FrameWork
I have used `NestJS` - A progressive `Node.js` framework

# Configuration
I have host my database on freemysqlhosting.net.
No need to change database config for api testing.

Server: sql.freedb.tech
Name: freedb_mondal
Username: freedb_mondal
Password: 2UDbzzEKN4#nFVM
Port number: 3306


## Database
The database has one table called `products` and has the following structure:

| Column Name | Data Type    |
| ----------- | ------------ |
| product_id  | INT          |
| name        | VARCHAR(255) |
| price       | FLOAT(10,2)  |
| description | TEXT         |


### Nest.js API

For Swagger api interface please open http://localhost:5000/api/

For FetchData        http://localhost:5000/api/fetchData
For GetAllData       http://localhost:5000/api/getAllData
For get data by Id   http://localhost:5000/api/getData/22

To start the application with the server listening for HTTP requests on the specified port in the `main.ts` file, run the following command in the terminal:

```bash
 $ npm run start
```

Or to automatically watch for changes:

```bash
 $ npm run start:dev
```

The application now should be running on the port specified in the `.env` file with the key `API_PORT`.

The available API endpoints are as follows:

- Get fetch data from third party api

```
 [GET]: http://localhost:API_PORT/api/fetchData
```

- Get all products

```
 [GET]: http://localhost:API_PORT/api/getAllData
```

- Get one product by id. If id doesn't exist, throws an error.

```
 [GET]: http://localhost:API_PORT/api/getData/:id
```

###  OpenAPI Specification

This project is configured with Swagger for OpenAPI Specification. To check the Swagger UI of this application, go to:

```
 http://localhost:API_PORT/api/
```
