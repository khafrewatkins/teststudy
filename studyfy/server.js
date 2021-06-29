// Load Node modules
const express = require('express');
// Initialise Express
const app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(process.env.PORT || 2121);



const ejs = require('ejs');

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
    console.log('we running now! catch up!');
});


// app.get('/', function (req, res) {
//     res.render('pages/flashcard/flashcards');
//     console.log('we running now! catch up!');
// });

// app.get('/', function (req, res) {
//     res.render('pages/calendar/calendars');
//     console.log('we running now! catch up!');
// });