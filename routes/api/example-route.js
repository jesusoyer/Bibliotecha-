const router = require('express').Router();
const { Example } = require('../../models');

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