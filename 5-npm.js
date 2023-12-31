//npm install -g nodemon 
//npm init ( install json package)  , // npm install (it will install json dependences)
//npm install lodash
// now we can use nodemon filename

const http = require('http');
const fs = require('fs')
const _ = require('lodash');

const server = http.createServer((req,res)=>{          

 
 res.setHeader('Content-Type', 'text/html');

 let path = './views/';
 switch(req.url){
   case '/':
      path+='index.html';
      res.statusCode=200;
      break;
   case '/about':
      path+='about.html';
      res.statusCode=200;
      break;
   case '/about-me':
      path+='about.html';
      res.statusCode=301;
      res.setHeader('location','/about');
      res.end()
      break;
   default:
      path+='404.html';
      res.statusCode=404;
      break;
 }

 fs.readFile(path , (err,data)=>{
    if(err){
       console.log(err);
       res.end();    
    }else {
       res.write(data);
       res.end();
    }
 })
}); 
server.listen(3000 , 'localhost' , () => {              
 console.log('listen for request on port 3000')
}); 

