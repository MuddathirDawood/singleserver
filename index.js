const express = require('express');

const app = express();

app.listen(3000);

let courses = [
    {id: 1, name: 'Software Engineering'},
    {id: 2, name: 'Web Development'},
    {id: 3, name: "Database Management" }
    ];

app.get('/', (req, res)=>{
    res.send(JSON.stringify(courses));
})

app.get('/courses/:id',(req, res)=>{
    if (req.params.id > courses.length) {
        res.send('<h1>There is no record with this id</h1>')
    } else {
        res.send(JSON.stringify(courses[req.params.id - 1]));
    }
})