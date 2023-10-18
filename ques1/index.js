// Q.1 Build a Server Using Http Module NodejS with api endpoints for Getting Products Data.

// ‘/’send msg as “Welcome to Men & Women Dummy Data”
// ‘/men’   → send 10 products data of men
// ‘/women’ → send 10 products data of women
// ‘/other’ → send response as page not found

// Hint: You can use any data, send data in json format

// requring a http module...... and creating a server using node js...


const http = require ('http');
const Hostname = 'localhost';
const Port = 3001;
// data.......
// men
const men = [   
    {
        "id":1,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":2,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":3,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":4,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":5,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":6,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":7,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":8,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":9,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":10,
        "name":"men's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    ];
// women
const women = [
    {
        "id":1,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":2,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":3,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":4,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":5,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":6,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":7,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":8,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":9,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
    {
        "id":10,
        "name":"women's T-shirt",
        "brand": "abc",
        "price":19.99,
        "color":"Blue",
        "size": "medium",
        "category": "Clothing"
    },
];

const server = http.createServer((req, res) =>{
   //homepage
   if (req.url == '/'){
       res.statusCode = 200;
       res.setHeader('content-Type', 'text-plain')
       res.end("Welcome to Men & Women Dummy Data")
       
    
   } else if (req.url == '/men'){
    res.statusCode = 200;
       res.setHeader('content-Type', 'application.json')
       res.end(JSON.stringify(men));


   } else if (req.url == '/women'){
    res.statusCode = 200;
       res.setHeader('content-Type', 'application.json')
       res.end(JSON.stringify(women));


   }else {
       res.statusCode = 500;
       res.setHeader('content-Type', 'text-plain')
       res.end("Page Not Found");

   }
});


// Listening a Server...........

server.listen(Port, () =>{
    console.log(`server is running at ${Hostname}: ${Port}`);
});
