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

  // create a new data record
  router.post('/', async (req, res) => {
    try {
      const exampleData = await Example.create({
        name: req.body.name,
      });
      res.status(200).json(exampleData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // update data record by its id value
  router.put('/:id', async (req, res) => {
    try {
      const exampleData = await Example.update(
        {
        name: req.body.name
        }, 
        {
        where: {
          id: req.params.id,
        },
      });
      if (!exampleData[0]) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(exampleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // delete data record by its id value
  router.delete('/:id', async (req, res) => {
    const deletedData = await Example.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    res.json(deletedData);
  });

    module.exports = router;