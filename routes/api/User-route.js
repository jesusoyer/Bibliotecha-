const router = require('express').Router();
const  User  = require('../../models/User.js');

// create new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;

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
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!userData) {
            res
            .status(400)
            .json({ message: 'User not found!'});
            return;
        }

        const correctPassword = await userData.checkPassword(req.body.password);

        if (!correctPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password! Please try again.'})
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res
            .status(200)
            .json({ message: 'You are now logged in!'});
        });
    } catch(err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
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