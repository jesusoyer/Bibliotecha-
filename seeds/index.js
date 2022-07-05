const userData= require("./user.json")
const bookData=require("./books.json")
const reviewData=require('./review.json')
const User = require('../models/User')
const Book = require('../models/Book')
const Review = require('../models/reviews')
const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
     const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const books of bookData) {
        await Book.create({
          ...books,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }
      for (const review of reviewData) {
        await Review.create({
          ...review,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }
      
  
    process.exit(0);
  };

  seedDatabase();