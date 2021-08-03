var bodyParser = require('body-parser');

var data = [{item:'get milk'},{item:'Go walk'},{item:'attend class'} ];
var urlencodedParser = bodyParser.urlencoded({extended:false});




module.exports = function(app){
    app.get('/', function(req, res){
        res.send("Server");
    });
    app.get('/todo', function (req, res){
        res.render('todo',{data:data});
    } );

    app.post('/todo',urlencodedParser, function (req, res){
        data.push(req.body)
        res.json(data);

    } );
    app.delete('/todo/:item', function (req, res){
        data = data.filter(function (todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        //console.log(req.params.item);
        res.json(data);
    });
};

