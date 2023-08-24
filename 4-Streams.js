
const fs = require('fs');
// Read stream
/*
const readstream = fs.createReadStream('./docs/blog3.txt');
readstream.on('data',(chunk)=>{
    console.log('-----new chunk-----');
    console.log(chunk)
})
*/

const readstream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'});
readstream.on('data',(chunk)=>{
    console.log('-----new chunk-----');
    console.log(chunk)
});


// Write stream
const writestream = fs.createWriteStream('./docs/blog4.txt');
readstream.on('data',(chunk)=>{
    writestream.write('\n NEW CHUNK \n')
    writestream.write(chunk)
});


// piping   ( it will read from readstream and every time we get a chunk it will write to writestream)
/*
const writestream = fs.createWriteStream('./docs/blog4.txt');
readstream.pipe(writestream)
*/

