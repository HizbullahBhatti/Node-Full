const express = require('express');
const fs = require('fs');
const app = express();
const http = require("http");
const data = require('./data');
const path = require('path');

// fs.writeFileSync('hello.txt', 'Hello from Node.js');

//why to import all fs functions only import that we are using to kese kare
// const fs2 = require('fs').writeFileSync
// fs2('hello2.txt', 'Hello from Node.js');


// http.createServer((req,res)=>{
//     res.write("<h1>Hello World I am listening on 4500 port </h1>")
//     res.end();
// }).listen(4500);



// app.get('/', (req, res) => res.send('Hello World'))

// app.get('/', (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(`<h1>${data.map((ele)=>{return ele.name})}</h1>`)
//     res.end();
// })

//loop to create files in files folder
// const dirPath = path.join(__dirname, 'files');

// for(let i=0; i<5; i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, `Hello from Node.js ${i}`)
// }

//perfoming crud operations in file
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/crud.txt`;

// //read file
// fs.readFileSync(filePath, 'utf-8', (err, item)=>{
//     console.log(item);
// })

// //Update file
// fs.appendFileSync(filePath, 'Hello from Node.js updated');

app.get('/', (req, res) => {
    res.send('Welcome this is Home Page')
})

app.get('/about', (req, res) => {
    res.send('Welcome this is About Page')
})

app.get('/help', (req, res) => {
    res.send('Welcome this is Help Page')
})





app.listen(3000, () => console.log('Example app listening on port 3000!'))
