const path = require('path');
const sequelize = require('./config/connection');
const express = require('express');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//turn the routes on
app.use(routes);

//turn on connection to db and sever
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening!'));
});
