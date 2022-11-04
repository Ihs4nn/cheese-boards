const User = require('./user.models')
const Board = require('./board.model')
const Cheese = require('./cheese.model')

module.exports = {User, Board, Cheese}


//Associations

User.hasMany(Board);
Board.belongsTo(User);

Board.belongsToMany(Cheese, {through: 'Board_Cheese'})
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})