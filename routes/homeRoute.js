
const router = require('express').Router();
// const User = require('../models/User')
const Book = require('../models/Book');

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({});
    //console.log(bookData)
    // res.status(200).json(bookData);
  
    const book = bookData.map((bookData) =>
    bookData.get({ plain: true })
  );
 
     

  res.render('homepage', {
    ...book, });
   
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
});

module.exports = router;