const { Model, DataTypes } = require('sequelize');

class Book extends Model {};

const sequelize = require('../config/connection.js');

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 32]
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [2, 32]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 32]
            }
        },
        date_published: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              id: 'id'
            }
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