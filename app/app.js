'use strict'

// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const fs = require("fs");

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

const accessLogStream = require("../app/src/config/log");

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(morgan('common', { stream: accessLogStream }));
app.use("/", home);

module.exports = app;