const { Model, DataTypes } = require('sequelize');

class Book extends Model { };

const sequelize = require('../config/connection.js');

Book.init(
    {
        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
         
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subjects: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                id: 'id'
            }
        },
        publish_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book',
    }
)

module.exports = Book;