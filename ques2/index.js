// Q.2 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express 

 //  `/` → send counter data as {counter:counter}
 //  `/increment` → increment counter by 1 and send in response :atest data as {counter:counter}
//  `/decrement` → decrement counter by 1 and send in response :atest data as {counter:counter}

// Using Express is Mandatory for this Question..................................................................

const express = require('express');
const app = express();
port = 3001

// counter variable.............

let counter = 0;

// middleware to parse JSON req bodies...........................................................................

app.use (express.json());

// Endpoint to get the current counter value..........................................................

app.get('/api/counter' , (req, res) =>{
    res.json({counter})
});

app.post('/api/counter/increment' , (req , res) =>{
    counter = counter +1;
    res.json({counter})
})
app.post('/api/counter/decrement' , (req , res) =>{
    counter = counter -1;
    res.json({counter})
})
app.post('api/counter/clear',(req , res) => {
    counter = 0;
    res.json({counter})
})

// listen Port 
 app.listen(port , () => {
    console.log(`counter is running on port: ${port} `);
 })

