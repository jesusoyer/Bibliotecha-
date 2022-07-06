const router = require('express').Router();
const User = require('../models/User')
const Book = require('../models/Book');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({});
    //console.log(bookData)
    // res.status(200).json(bookData);
  
    const book = bookData.map((bookData) =>
    bookData.get({ plain: true })
  );
 
  console.log(book)
     

  res.render('homepage', {
    book, logged_in: req.session.logged_in });
    
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
});



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  console.log("login route")
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});



router.get('/profile', withAuth, async (req, res) => {
  try {
    console.log('you are here at profile route')
    // Find the logged in user based on the session ID
    const userData= await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Book }],
    });



    // need to join three tables with sequelize
    console.log(userData)
    

    const user = userData.get({ plain: true });
    
    console.log(user)


    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log("profile error")
  }
});

router.get('/:isbn', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.isbn, {});
    if (!bookData) {
      res.status(404).json({ message: 'No category with this isbn!' });
      return;
    }
    const books = bookData.get({plain:true});
    // res.status(200).json(bookData);
    res.render('books', { books, logged_in: req.session.logged_in  });
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
  });






module.exports = router;