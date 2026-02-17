const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.route');
const captainRoutes = require('./routes/captain.route');
const cookieParser = require('cookie-parser');

connectToDb();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res)=>{
	res.send("Hello World");
})
app.use('/users', userRoutes)
app.use('/captain', captainRoutes)


module.exports = app;