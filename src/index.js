const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');

const mongoose = require('mongoose');
const db = require('./config/db');

//Connnect to db
db.connect();


//127.0.0.1 - localhost

app.use(express.static(path.join(__dirname, 'public')));

//Middleware xử lý dữ liệu từ form data submit lên
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//HTTP Logger
app.use(morgan('combined'));

//Template engine - Handle bars
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(__dirname);
});
