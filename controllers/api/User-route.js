const router = require('express').Router();
const  {User}  = require('../../models/');

// create new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
console.log(userData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({where: { email: req.body.email }  });

        if (!userData) {
            res
            .status(400)
            .json({ message: 'User not found!'});
            return;
        }
        console.log(userData.username)
        const correctPassword = await userData.checkPassword(req.body.password);

        if (!correctPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password! Please try again.'})
            return;
        }

        console.log(correctPassword.password)

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res
            .status(200)
            .json({ user: userData, message: 'you are now logged in'});
            console.log('you are logged in')
            console.log(userData)
        });
    } catch(err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_In) {
        req.session.destroy(() => {
            res.status(204).end()
        });
    } else {
        res.status(404).end();
    }
})

//test route to see if user data is being posted after signup/login
router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({});
      res.status(200).json(userData);
    } catch (err) {
      console.log(err)
      
    }
    });

module.exports = router;