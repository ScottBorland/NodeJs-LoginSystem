const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
var PORT = process.env.PORT || 5000;

app.use(cors());
//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')

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
app.use('/api/posts', postRoute);

app.listen(PORT, () => console.log('Server up and running'));


