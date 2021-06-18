const express = require('express');
const path = require('path');
const session = require("express-session");
const routes = require('./controllers');
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const compression = require('compression');

const app = express();
app.use(compression())
// function shouldCompress (req, res) {
//     if (req.headers['x-no-compression']) {
//         // don't compress responses with this request header
//         return false
//     }

//     // fallback to standard filter function
//     return compression.filter(req, res)
// }


const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const sess = {
    secret: "Test secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});