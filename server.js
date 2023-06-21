const express = require('express')
const app = express()

const path = require('path');



// app.get('/', (req, res) => {
//     console.log(req.query.name);
//     res.send('Welcome this is Home Page of '+`<a href="/about">About</a> <a href="/help">Help</a>`) 
// })

// app.get('/about', (req, res) => {
//     res.send([{name:'Hizbullah', age: 22}])
// })

// app.get('/help', (req, res) => {
//     res.send(`<input type="text" placeholder="Enter your name" /> <button>Submit</button>`) 
// })

// app.set('view engine', 'ejs');

// const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));
const PORT = process.env.PORT || 4550;

// app.get('/profile', (req, res) => {
//     const user={
//         name: 'Hizbullah',
//         age: 22,
//         hobbies: ['Coding', 'Reading', 'Gaming']
//     }
//     res.render('profile',{user})
// })

// app.get('/login', (req, res) => {
//     res.render('login')
// })

//Middlewares
// const checkAge = (req, res, next) => {
//     const age =  req.query.age;
//     if(age > 18){
//         next()
//     }
//     else{
//         res.send("You are not allowed")
//     }
// }

// app.use(checkAge)

// app.get('/login', (req, res) => {
//     res.send("This is Login Page")
// })




app.listen(4550, () => console.log(`Server is running on port ${PORT}`))