const { createTodo, getTodo, updateTodo, deleteTodo } = require('../controllers/todo');
const express = require('express');

const Router = express.Router();

Router.post('/', createTodo);

Router.get('/', getTodo);

Router.put('/', updateTodo);

Router.delete('/', deleteTodo);


module.exports = Router