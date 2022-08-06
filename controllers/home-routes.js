const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage');
});

//route to login page
router.get('/login', (req,res) => {
    if(req.session.loggedIn){
        res.redirect('/rental');
        return;
    }

    res.render('login');
});

module.exports = router;
