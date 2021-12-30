const express= require('express');
const flash = require('flash');
const datalayer = require('./datalayer/datalayer');
const routeForm = require('./router/route.form')
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(flash());


const host = "localhost";
const port = 9990;




app.use('/', routeForm);


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