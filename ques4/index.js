// Q.4 Build a Server that Generates Random Number Using Express.js 
// ‘/random’ → send random number in response {random:10} 


const Express = require('express');
const App = Express();
const Port = 3001;

// middleware to parse JSON req bodies...........................................................................

App.use (Express.json());


let Random = 0 ;


App.get('/RandomNumberServer', (req , res) => {
  res.end("<h1>Welcome To Random Number API </h1>")
})
App.get('/random', (req , res) => {
    Random = Math.floor(99*Math.random())
  res.json({Random})
})

// Listen Port 
App.listen(Port , (req , res) => {
    console.log(`Server is Listening on Port: ${Port} `);
})