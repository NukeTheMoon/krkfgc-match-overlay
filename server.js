// our dependencies
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000
const fs = require('fs');
var cors = require('cors')

app.use(cors({credentials: true, origin: true}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

function getData() {
    return fs.readFileSync('./data.json', { encoding: 'utf-8'})
}
function setData(value) {
    fs.writeFileSync('./data.json', JSON.stringify(value))
}

const defaultData = {
    game: '',
    title: '',
    player1name: '',
    player1score: '0',
    player2name: '',
    player2score: '0'
}

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


// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
