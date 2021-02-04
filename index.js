// express 
const { response } = require('express');
var express = require('express');
// bodyparser 
var bodyParser = require('body-parser');
// cors 
var cors = require('cors');
var session = require('express-session');
var flash = require('connect-flash');
// import Mongo pour la BDD
var MongoClient = require('mongodb').MongoClient;

// on définit la var qui va contenir express 
var app = express();

app.use(cors());
app.use(bodyParser.json());
// Utilise Body-Parser, pour pouvoir lire les entrées d'un formulaire
// le stocke comme un obj Javascript
// accessible via req.body
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
  }));

app.use(flash());

// Déclaration de vues Embedded Javascript (EJS)
app.set('engine_view', 'ejs');

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
  });
