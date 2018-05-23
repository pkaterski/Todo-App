const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const dbstr= "mongodb://pesho:babevbaby@ds131800.mlab.com:31800/todo_app_pesho";

mongoose.connect(dbstr, (err) => {
    if (err) console.error(err);
    else console.log('Successfully Connected to Database\n');
});

var Schema = mongoose.Schema;
var todoSchema = new Schema({
    todo: String,
    isDone: Boolean
});
var Todo = mongoose.model('Todo', todoSchema);

router.get('/todos',  (req, res) => {
    Todo.find({}, (err, result) => {
        if (err) {
            res.send('An Error Occured While Fetching Data');
            console.log(err);
        } 
        else res.send(result);
    });
});

router.get('/todos/:id', (req, res) => {
    Todo.findById(req.params.id, (err, result) => {
        if (err) {
            res.send('An Error Occured While Fetching Data');
            console.log(err);
        }
        else if (!result) {
            res.send('No Such Todo!');
        }
        else res.send(result);
    });
});

router.post('/todos', (req, res) => {
    if (!req.body.todo) res.send('Create Todo: No Todo Provided!');
    else if (!(req.body.isDone + '')) res.send('Create Todo: No Todo Status Provided!');
    else {
        var newTodo = Todo({
            todo: req.body.todo,
            isDone: req.body.isDone
        });

        newTodo.save((err, result) => {
            if (err) {
                res.send('Create Todo: An Error Occured!');
                console.log(err);
            } else {
                res.send(result);
            }
        });
    }
});

router.put('/todos', (req, res) => {
    if (!req.body.id) res.send('Update Todo: No Id Provided!');
    else {

        Todo.findById(req.body.id, (err, result) => {
            if (result) {
                Todo.findByIdAndUpdate(req.body.id, {
                    todo: req.body.todo || result.todo,
                    isDone: req.body.isDone || result.isDone
                }, (err, result) => {
                    if (err) {
                        res.send('Update Todo: An Error Occured!');
                        console.log(err);
                    } 
                    else res.send(result);
                });
            } else {
                res.send('Update Todo: No Such Todo!');
            }
        });
        
    }
});

router.delete('/todos/:id', (req, res) => {
    if (!req.params.id) res.send('Delete Todo: No ID Provided!');
    else {
        Todo.findById(req.params.id, (err, result) => {
            if (result) {
                Todo.findByIdAndRemove(req.params.id, (err) => {
                    if (err) {
                        res.send('Delete Todo: An Error Occured!');
                        console.log(err);
                    }
                    else res.send({"OK":"true"})
                });
            } else {
                res.send('Delete Todo: No Such Todo!');
            }
        });
    }
});

module.exports = router;

