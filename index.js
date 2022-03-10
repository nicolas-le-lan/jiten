const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser');

const fetch = require("node-fetch");

app.use(express.urlencoded({ extended: true })) 

app.use('/favicon.ico', express.static('images/favicon.ico'));

app.use(express.static('public'));
app.use(cookieParser("great"));

// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


const staff = require('./routes/contact')
app.use('/contact', staff)

const search = require('./routes/search')
app.use('/search', search)

const home = require('./routes/home')
app.use('/', home)


// custom 404 page
app.use( (req, res) => {
    res.status(404);
    res.render('404');
});

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('public'));
