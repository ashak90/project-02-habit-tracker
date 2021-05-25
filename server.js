const express = require('express');
const path = require('path');
const routes = require('./controllers');
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const { Sequelize } = require('sequelize/types');
const SequelizeStore = require("connect-session-sequelize");

const app = express();
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
}

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