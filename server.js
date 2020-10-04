const express = require('express');
const app = express();
const port = 3000;
var customData = ('./budget-data.json');


app.use('/', express.static('public'));



app.get('/hello',( req, res) => {

    res.send('Hello World!')

});

app.get('/budget',( req, res) => {

    ///res.sendFile('/xampp/dev/personal-budget/budget-data.json');
    res.sendFile('budget-data.json', { root: __dirname });

});


app.listen(port, () =>{

    console.log('Example app listening at ')

});