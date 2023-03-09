const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', (req, res)=> {

    //res.render('homepage')
    res.render('homepage', {
        logged_in: req.session.logged_in
    })

});


router.get('/login', (req, res)=> {

    //res.render('homepage')
    res.render('signup', {
        logged_in: req.session.logged_in
    })

});

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.redirect('/');
    }
  });


module.exports = router;