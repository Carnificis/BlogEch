const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const postData = await Post.create({...req.body,user_id:req.session.user_id});
  
    
      console.log(postData);
      res.status(200).json(postData);
    
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
})

module.exports = router;