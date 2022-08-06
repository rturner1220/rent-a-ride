const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
<<<<<<< HEAD
  res.render('homepage');
=======
    console.log(req.session);
    res.render('homepage');
>>>>>>> betsy
});

<<<<<<< HEAD
//route to login page
router.get('/login', (req,res) => {
<<<<<<< HEAD
    //if(req.session.loggedIn){
    //     res.redirect('/');
    //     return;
    // }
=======
module.exports = router;
=======
    if(req.session.loggedIn){
        res.redirect('/rental');
        return;
    }
>>>>>>> betsy


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
