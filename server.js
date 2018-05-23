const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const todos = require('./routes/todos');

const app = express();

app.use(express.static(path.join(__dirname ,'client/todoApp/dist/todoApp')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api/v1', todos);

app.listen(3000, () => {
    console.log('server started on port 3000...');
});