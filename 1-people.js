const people = ['yoshi', 'dan','john','doe']
const ages = [20,30,25,40]
console.log(people);

module.exports = people  // export the value to xyz const and then we can use what we exported
module.exports = 'hello'

const ppl={
    peopl: people,
    age: ages
}
module.exports = ppl 

// we can use module.export = {} to export multiple data ,we pass object of the data we want to export ex: module.exports={people,ages}