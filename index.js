const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    ()=> console.log('connected to db!')
);

// May have to do the following: To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.

//Middelware
app.use(express.json());
//Route middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server up and running'));