const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage');
    console.log(req.session);
    res.render('homepage');
});

//route to login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/rental');
        return;
    }
});

module.exports = router;
