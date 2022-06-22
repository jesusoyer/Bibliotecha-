const express = require("express");
const session = require('express-session');
const sequelize = require('./config/connection');
const routes = require('./routes')

const Example = require('./models/example.js')

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});