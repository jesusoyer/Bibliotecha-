const router = require('express').Router();
const  Book  = require('../../models/Book.js');
const withAuth = require('../../utils/auth.js');

//get all data records
router.get('/', async (req, res) => {
    try {
      const bookData = await Book.findAll({});
      res.status(200).json(bookData);
    } catch (err) {
      console.log(err)
    }
    });

//get one data record by its id value
router.get('/:id', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id, {});
    if (!bookData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(bookData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
  });

  // create a new data record
  router.post('/', withAuth, async (req, res) => {
    console.log("book post route hit")
    
    try {
      const bookData = await Book.create({
     ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(bookData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // update data record by its id value
  router.put('/:id', async (req, res) => {
    try {
      const bookData = await Book.update(
        {
        name: req.body.name
        }, 
        {
        where: {
          id: req.params.id,
        },
      });
      if (!bookData[0]) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(bookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // delete data record by its id value
  router.delete('/:isbn', async (req, res) => {
    const deletedData = await Book.destroy({
      where: {
        isbn: req.params.isbn,
      },
    });
    
    res.json(deletedData);
  });

    module.exports = router;