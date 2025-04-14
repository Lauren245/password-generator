import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

//Import the routes
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

//serve static files from the public directory
app.use(express.static('../client/public'));

//middleware for parsing JSON and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware for connecting the routes
app.use(routes);

//start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));