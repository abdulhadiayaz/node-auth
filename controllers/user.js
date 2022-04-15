const bcrypt = require('bcryptjs');
const moment = require('moment');
const {users} = require('../models');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: req.flash('error'),
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin =  (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  users.findOne({where: { email: email }})
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }

      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            console.log("Successfully logged in:" )
            return req.session.save(err => {
              console.log(err);
              res.redirect('/profile');
            });
          }
        req.flash('error', 'Invalid email or password.');
        console.log("incorrect email or pass");
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.getProfile = (req, res, next) => {
  const user = req.session.user;

  if(user){
    const d = new Date(user.dob).toLocaleDateString('en-US', 
    {year: 'numeric', month: '2-digit', day: '2-digit'});
    res.render('profile/index', {
      path: '/profile',
      pageTitle: 'Profile',
      user: user,
      userDOB: d ,
      isAuthenticated: true
    });
  }else{
    res.render('profile/index', {
      path: '/profile',
      pageTitle: 'Profile',
      user: user,
      isAuthenticated: false
    });
}
};


exports.postSignup = (req, res, next) => {  
  const { firstName, surName, username, email, dob, password, confirmPassword } = req.body;

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
  }
  age = getAge(dob);

  function getID() {
    var randID = Math.floor(1000 + Math.random() * 9000);
    console.log("rand : ", randID);
    if(!users.findOne({where: {id:randID}})){
      getID();
    }
    return randID;
  }

  users.findOne({ where: {email: email} })
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      return bcrypt.hash(password, 12);
    })
    .then(hashedPassword => {
     

      const id = getID();
      const user = new users({
        id: id,
        firstName: firstName,
        surName: surName,
        username: username,
        email: email,
        dob: dob,
        password: hashedPassword,
        age:age
      });
      return user.save();
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/login');
  });
};
 
exports.deleteUser = (req, res, next) => {
  const email = req.body.userEmail;

  users.destroy({
    where: {
       email: email
    }
  })
  .then(rowDeleted =>{ 
    if(rowDeleted === 1){
        console.log('Deleted successfully');
        res.redirect('/login');
      }
  })
  .catch(err => console.log(err));
};
