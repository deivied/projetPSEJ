const express = require('express');
const flash = require('flash');
const datalayer = require('./datalayer/datalayer');
const routeForm = require('./router/route.form');
const routePublication = require('./router/route.publication');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');




const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));



// app.use(flash());


const host = "localhost";
const port = 9990;

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    name: "devsey.sid",
    secret: "323ERzrezRZER/!$zzjTTYdsfqssERYJ,jvb$$mg!df:d!",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: oneDay
    }
}));
app.use(cookieParser());

app.use('/', routeForm);
app.use('/', routePublication);



app.use(express.static('./public'));
app.set('views', './views');
app.set('view engine', 'ejs');





datalayer.connectionDB();



app.listen(port, host, () => {
    try {
        console.log(`server running on ${host}:${port}`);
    } catch (error) {
        console.error(error);
    }
});