const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tablejoin extends Model {}

Tablejoin.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    book_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'book',
        key:'id'
      }
    },
    review_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'review',
        key:'id'
      }

    }
    
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tablejoin',
  }
);

module.exports = Tablejoin;
