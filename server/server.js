require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); // use son midelware, osea como un interceptors
app.get('/usuarios', function(req, res) {
    res.json('Hello World');
});

app.post('/usuarios', function(req, res) {
    const body = req.body;
    if (body.nombre === undefined) {
        res.status(400);
        res.json({ a: 'xxx' });
    } else {
        res.json(body);
    }

});
app.put('/usuarios/:id', function(req, res) {
    const id = req.params.id;
    res.json({ id });
});
app.delete('/usuarios', function(req, res) {
    res.json('Hello Worldxd de');
});
app.listen(3000, () => {
    console.log('listen ', process.env.PORT);
});