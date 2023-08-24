
const xyz = require('./1-people');  //import file , ('./' means in the same path we are in)
console.log(xyz)

console.log(xyz.peopl,xyz.age);

const {people , ages} = require('./1-people'); 
console.log(people , ages);

  // info about my os
const os = require('os');      
console.log(os);
console.log(os.platform() , os.homedir())
