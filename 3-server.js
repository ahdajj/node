//Creating server 
/*
const http = require('http');
const server = http.createServer((req,res)=>{          // or  http.createServer ....
   console.log('request made')
});    // at browser write localhost:3000 

server.listen(3000 , 'localhost' , () => {                  //(port num , host , function fires when request is ma
   console.log('listen for request on port 3000')
});
*/


  // Creating responce ( we need 3 steps 1.setheader to determine data type , 2.write to send response ,3. end ) 
/*
const http = require('http');
const server = http.createServer((req,res)=>{          
   console.log(req.url , req.method);    
   res.setHeader('Content-Type', 'text/plain');
   res.write('hello,ninjas');
   res.end();
}); 

server.listen(3000 , 'localhost' , () => {              
   console.log('listen for request on port 3000')
});
*/

        // Ex sending html response 
  /*
const http = require('http');
const server = http.createServer((req,res)=>{          
   console.log(req.url , req.method);    
   res.write('<head><link rel="stylesheet" href="#"></head>')
   res.setHeader('Content-Type', 'text/html');
   res.write('<p>hello,ninjas</p>');
   res.write('<p>hello again ,ninjas</p>');
   res.end();
}); 

server.listen(3000 , 'localhost' , () => {              
   console.log('listen for request on port 3000')
}); 
*/

     // Ex Sending full html document
     /* 
  const http = require('http');
  const fs = require('fs')
const server = http.createServer((req,res)=>{          
   console.log(req.url , req.method);    
   res.setHeader('Content-Type', 'text/html');
   fs.readFile('./views/index.html' , (err,data)=>{
      if(err){
         console.log(err);
         res.end();    // to dont keep the request hanged if there is error
      }else {
         res.write(data);
         res.end();
      }
   })
}); 

server.listen(3000 , 'localhost' , () => {              
   console.log('listen for request on port 3000')
});
*/ 

// Basic routing + status code 
/*
const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res)=>{          
 console.log(req.url , req.method);    
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
   default:
      path+='404.html';
      res.statusCode=404;
      break;
 }

 fs.readFile(path , (err,data)=>{
    if(err){
       console.log(err);
       res.end();    // to dont keep the request hanged if there is error
    }else {
       res.write(data);
       res.end();
    }
 })
}); 

server.listen(3000 , 'localhost' , () => {              
 console.log('listen for request on port 3000')
}); 
*/

// Redirecting
const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res)=>{          
 console.log(req.url , req.method);    
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
       res.end();    // to dont keep the request hanged if there is error
    }else {
       res.write(data);
       res.end();
    }
 })
}); 

server.listen(3000 , 'localhost' , () => {              
 console.log('listen for request on port 3000')
}); 
