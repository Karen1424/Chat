/// Standard requires
const express = require('express');
const http = require('http');
const path = require('path');
require('dotenv').config();
/// Local requires
const authRouter = require('./controller/authController');
const messageRouter = require('./controller/userMessage');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'./public')));

/// Routes
app.use('/api/user', authRouter);

/// Server Listening
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => console.log(`Server has been started on PORT ${PORT}`));
