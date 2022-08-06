const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  res.render('homepage');
});

<<<<<<< HEAD
//route to login page
router.get('/login', (req,res) => {
    //if(req.session.loggedIn){
    //     res.redirect('/');
    //     return;
    // }
=======
module.exports = router;


//route to the login page
router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //     res.redirect('/');
  //     return;
  // }
>>>>>>> 186d56c6984cae17e7567bb91195d7dacc8e5a0f

  res.render('login');
});

module.exports = router;
<<<<<<< HEAD
=======

>>>>>>> 186d56c6984cae17e7567bb91195d7dacc8e5a0f
