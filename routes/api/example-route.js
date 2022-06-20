const router = require('express').Router();
const  Example  = require('../../models/example.js');

//get all data records
router.get('/', async (req, res) => {
    try {
      const exampleData = await Example.findAll({});
      console.log(exampleData)
      res.status(200).json(exampleData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
    });

//get one data record by its id value
router.get('/:id', async (req, res) => {
  try {
    const exampleData = await Example.findByPk(req.params.id, {});
    if (!exampleData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(exampleData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
  });

    module.exports = router;