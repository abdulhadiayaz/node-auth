const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./models/index');
const {users} = require('./models');
const session = require('express-session');
const flash = require('connect-flash');


const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    // store: store
  })
);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  users.findAll(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use(authRoutes);

app.use(errorController.get404);


sequelize
     .sync()
    //.sync({ force: true })

    .then(result => {
        console.log(result);
        app.listen(3000);

    })
    .catch( err => {
        console.log(err);
    });

