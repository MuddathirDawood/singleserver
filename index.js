const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();

app.use(router, cors(), express.json(), express.urlencoded({
    extended: true
}))
app.listen(process.env.PORT, ()=>{console.log(`Server is running at port ${process.env.PORT}`)});

let courses = [
    {id: 1, name: 'Software Engineering'},
    {id: 2, name: 'Web Development'},
    {id: 3, name: "Database Management" }
    ];

router.get('/', (req, res)=>{
    res.send(JSON.stringify(courses));
})

router.get('/courses', (req, res)=>{
    res.redirect('/');
})

router.get('/courses/:id',(req, res)=>{
    const index = parseInt(req.params.id) -1
    if (index > courses.length) {
        res.send('<h1>There is no record with this id</h1>')
    } else {
        res.send(JSON.stringify(courses[index]));
    }
})