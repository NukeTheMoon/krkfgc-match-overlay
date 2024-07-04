'use strict';

const express = require('express');
const cors = require('cors')
const fs = require('fs');

const app = express();
const port = 2137
const defaultData = {
    game: '',
    title: '',
    p1name: '',
    p1score: '0',
    p2name: '',
    p2score: '0'
}

function getData() {
    return fs.readFileSync('./data.json', { encoding: 'utf-8'})
}
function setData(value) {
    fs.writeFileSync('./data.json', JSON.stringify(value))
}

app.use(cors({ credentials: true, origin: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/data', (req, res) => {
    res.send(getData())
});
app.post('/data', (req, res) => {
    setData(req.body)
    res.send("OK")
})
app.delete('/data', (req, res) => {
    setData(defaultData)
    res.send("OK")
})

app.listen(port, () => console.log(`Listening on port ${port}`));
