const Example = require('../models/example.js');

const exampleData = [
    {
        name: 'example'
    }
];

const seedExample = () => Example.bulkCreate(exampleData);

module.exports = seedExample;
