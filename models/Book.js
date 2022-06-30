const { Model, DataTypes } = require('sequelize');

class Book extends Model { };

const sequelize = require('../config/connection.js');

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                id: 'id'
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        review: {
            type: DataTypes.STRING,
            allowNull: true,
        }
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