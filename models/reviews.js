const {Model, DataTypes}= require('sequelize');



class Review extends Model{}

const sequelize = require('../config/connection');

Review.init(
    {
        id:{ 
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    
     review_text:{
        type:DataTypes.STRING,
        allowNull:false,
     },
     book_rating:{
        type:DataTypes.INTEGER,
        allowNull:true,

     }, 
     user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
        model: "user",
        id: 'id'
        }

     },
     book_isbn:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'book',
            isbn: "isbn"
        }
     },
      
      
      
    },
        

    {
    sequelize,
    timestamps: false,
    freezeTableName:true,
    underscored:true,
    modelName:'reviews'
    },

);


module.exports = Review;