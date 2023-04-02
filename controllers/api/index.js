const router = require('express').Router();

const commentRoutes = require("./commentRoutes");
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoute.js');

router.use("/comments", commentRoutes);
router.use('/users', userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
