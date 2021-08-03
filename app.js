var express = require('express');
var todoController = require('./controllers/todo-controller');

var app = express();



// set template engine
app.set('view engine', 'ejs');

//static files
app.use('/assets',express.static('./static/'));

//fire controller
todoController(app);


//listen to port
const port = 5000;
app.listen(port);

console.log("Listening at port :",port);