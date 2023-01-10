const express = require('express');
const fs = require('fs');
const app = express();

fs.writeFileSync('hello.txt', 'Hello from Node.js');

app.get('/', (req, res) => res.send('Hello World'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
