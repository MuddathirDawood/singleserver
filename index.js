const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors(), bodyParse.json())
app.listen(3000, ()=>{console.log('Server is running at port 3000')});

let courses = [
    {id: 1, name: 'Software Engineering'},
    {id: 2, name: 'Web Development'},
    {id: 3, name: "Database Management" }
    ];

app.get('/', (req, res)=>{
    res.send(JSON.stringify(courses));
})

app.get('/courses', (req, res)=>{
    res.redirect('/');
})

app.get('/courses/:id',(req, res)=>{
    const index = parseInt(req.params.id) -1
    if (index > courses.length) {
        res.send('<h1>There is no record with this id</h1>')
    } else {
        res.send(JSON.stringify(courses[index]));
    }
})