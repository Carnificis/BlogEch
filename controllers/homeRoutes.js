const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', (req, res)=> {

    //res.render('homepage')
    res.render('homepage', {
        logged_in: req.session.logged_in
    })

});

module.exports = router;