// Headers - start

const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//end

//Page starts
const indexArray = [];
const todos = [];
let index = 0;

// todos.forEach(function(item, index) {
//   indexArray.push(index);
// });


app.get("/", function (req, res) {
  res.render('index', { todos: todos, index: indexArray });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  index++;
  indexArray.push();
//  todos.forEach(function(item, index) {
  indexArray.push(index);
  res.redirect('/');
})

//Page ends
app.listen(3000, function(){
  console.log("App is running");
});
