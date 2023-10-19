// Q.3_Create a Basic Server with Different Routes using Express 
// `/` → send response as {msg:`I am homepage`} 
// `/about` → send response as {msg:`I am about page`}
// `/contact ` → send response as {emai::`suppor#@pwskills.com`}



const express = require('express');
const app = express();
const port = 3001;

app.get('/' , (req , res) => {
    res.json("I am Homepage")
})
app.get('/about' , (req , res) => {
    res.end("<h1> I am about Page </h1>")
})
app.get('/contact' , (req , res) => {
    res.end("<h1> Email : support@pwskills.com </h1>")
})

// Listen Port 

app.listen(port ,(req , res) => {
    console.log(`server is listening on Port : ${port}`);
})