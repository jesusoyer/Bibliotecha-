const Example = require('../models/example')
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
    exam, });
    
      const exam = exampleData.map((exampleData) =>
      exampleData.get({ plain: true })
    );
   
       
        
        

    res.render('homepage', {
      exam, 
      
    });   
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
});

module.exports = router;