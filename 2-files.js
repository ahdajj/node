
// file system
const fs = require('fs')   // to use fs module

       // reading files
       /*
       fs.readFile('./docs/bolg1.txt',(err , data) =>{
        if(err){
            console.log(err);
        }
        console.log(data);
        console.log(data.toString());
       });

       console.log('this line will be executed before the previous')
       */

       //writing files 
       /*
       fs.writeFile('./docs/bolg1.txt','hello world' , ()=>{
        console.log('file was written')
       });
                        // if the file doesnt exixt it will write new file
       fs.writeFile('./docs/bolg2.txt','hello world' , ()=>{
        console.log('file was written')
       });
       */

      //Directories  (make and delete folders)
      /*
      fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder created')
      })
       */
      
     /*
    if(!fs.existsSync('./assets')){    //check if the file exist
      fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder created')
      })
    } else {
        fs.rmdir('./assets',(err)=>{
            if(err){
                console.log(err)
            }
            console.log('folder deleted')
        })
    }
     */
        // Deleting files
        if(fs.existsSync('./docs/deleteme.txt')){
            fs.unlink(('./docs/deleteme.txt') , (err)=>{
                if(err){
                    console.log(err)
                }
                console.log('file deleted')
            })
        }