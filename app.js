const express = require('express')
const app = express()
const fs = require('fs');

fs.readFile('nails.json', (err, data) => {  
    if (err) throw err;
    nails = JSON.parse(data);
});

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/nails', (req, res) => {
	res.json(nails)
})

app.listen(3000, () => {
 console.log('App listening on port 3000!')
})