const Todo = require('../models/todo')

const createTodo = async (req, res) => {
    try{
    const todo = new Todo(req.body);
    const result = await todo.save();
    
    res.send({
        status:"Success", 
        message:"Todo created",
        _id: result._id,
    });
} catch (error) {
    res.send({
        status:"error", 
        message:"Todo creation failed",
        error,
    });
}}

const getTodo = async (req, res) => {
    try{
    const todos = await Todo.find({}); 
    res.send({
        status:"Success", 
        message:"Todo fetched",
        data : todos,
    });
} catch (error) {
    res.send({
        status:"error", 
        message:"Todo fetch failed",
        error,
    });
}
};

const updateTodo = async (req, res) => {
    try{
        const id = req.body._id;
        const todos = await Todo.findById(id)
        todos.userName = req.body.userName;
        todos.mobile = req.body.mobile;
        await todos.save();
        res.send({
            status:"Success", 
            message:"Todo updated",
            data : todos,
        });
    } catch (error) {
        res.send({
            status:"error", 
            message:"Todo update failed",
            error,
        });
    }
};

const deleteTodo = async (req, res) => {
    try{
        const id = req.body._id;
        const todo = await Todo.findById(id);
        await todo.deleteOne();
        res.send({
            status:"Success", 
            message:"Todo deleted",
        });
    } catch (error) {
        res.send({
            status:"error", 
            message:"Todo delete failed",
            error
        });
    }
    
};

module.exports = { createTodo, getTodo, updateTodo, deleteTodo };