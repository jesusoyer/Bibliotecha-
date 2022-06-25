const Example = require('../models/example')
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      const exampleData = await Example.findAll({});
      console.log(exampleData)
      // res.status(200).json(exampleData);
    
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