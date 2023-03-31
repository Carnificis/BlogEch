const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");
router.get("/post", (req, res) => {
  
  res.render("post", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
   // res.render("profile", { logged_in: req.session.logged_in })
    res.redirect("/profile")
  } else{
    res.render("signup", {
      logged_in: req.session.logged_in,
    });
}
});

router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      //res.status(204).end();
    });
  }
    res.redirect("/");
  
});

router.get("/profile", withAuth, async (req, res) => {
 console.log("Profile")
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    console.log(user,"PROFILE")
    res.render("profile", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/", async (req, res) => {
  try {
    // // Get all Posts and JOIN with user data
    // const postData = await Post.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   ],
    // });

    // Serialize data so the template can read it
    // const Posts = postData.map((PostData) => PostData.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      //Posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/Post/:id", async (req, res) => {
  try {
    const PostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const Post = PostData.get({ plain: true });

    res.render("Post", {
      ...Post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
