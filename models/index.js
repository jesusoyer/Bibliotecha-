const Book = require('./Book');
const Review = require('./reviews');
const User = require("./User")
const Tablejoin = require('./Tablejoin')

User.hasMany(Book, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Book.belongsTo(User, {
    foreignKey: 'user_id'
  });

Book.hasMany(Review,{
  foreignKey: "book_id"
})

  


  Review.belongsTo(User, {
    foreignKey: 'user_id'
  });

  User.hasMany(Review,{
    foreignKey:"user_id"
  })  
  Book.hasMany(Review,{
    foreignKey: "book_id"
  })

  Review.belongsTo(Book,{
    foreignKey: "book_id"
  })

  Book.belongsToMany(Review,{
    through: Tablejoin
  });
  Review.belongsToMany(Book,{
    through: Tablejoin
  });

 





module.exports = {
    Book,
    User,
    Review
}
