require('./models/DBconfig');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const empController = require('./controllers/empController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

// file static path
app.use('/static', express.static(path.join(__dirname, 'assets/')));

app.use(bodyparser.json());
app.use('/employee', empController);
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/templates/' }));
app.set('view engine', 'hbs');

app.listen(3900, () => {
    console.log('SERVER is listening on PORT 3900');
});
