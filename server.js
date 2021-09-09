const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (request, response)=>{
    //response.send('<h1>Hello, world</h1>');
    console.log(__dirname);
    response.sendFile(__dirname + '/index.html');
});

app.post('/calc', (req, res)=>{
    console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send(`${num1} + ${num2} = ${result}`);

});

app.listen(3000, function(){
    console.log('server is running on port 3000');
});