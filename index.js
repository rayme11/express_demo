import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.use(express.static('./public'));

// You could test the bellow end points with any API client
// PostMan, ReadyAPI, LoadAPI, etc...

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
    console.log(data);

});

app.get('/', (req, res) => {
    // get data first
    res.json(data);
});

app.post('/newItem', (req, res) => {
    res.send(`a post request with /newItem route on port ${PORT}`);
});

app.put('/item', (req, res) => {
    res.send(`a put request with /item route on port ${PORT}`);
});

app.delete('/item', (req, res) => {
    res.send(`a delete request with /item route on port ${PORT}`);
});


