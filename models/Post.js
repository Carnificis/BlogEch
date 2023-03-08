const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      } 
    }
  },
  {
    sequelize
  }
);

module.exports = Post;
