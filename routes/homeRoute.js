const Example = require('../models/example')
const router = require('express').Router();
<<<<<<< HEAD

router.get('/', async (req, res) => {
    try {
      const exampleData = await Example.findAll({});
      console.log(exampleData)
      // res.status(200).json(exampleData);
=======
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
    exam, 
>>>>>>> 09937ad19d2b96d7e7ae6cda804509798013a8c0
    
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