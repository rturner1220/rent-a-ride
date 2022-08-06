<<<<<<< HEAD
router.get('/', (req, res) => {
    res.render('homepage', {
      id: 1,
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'Handlebars Docs',
      created_at: new Date(),
      vote_count: 10,
      comments: [{}, {}],
      user: {
        username: 'test_user'
      }
    });
  });
=======
const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('homepage');
});

module.exports = router;
>>>>>>> 857eab757d1df2b1e22ffd0af1156fd03b8342ab
