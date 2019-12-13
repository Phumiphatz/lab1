function add1(a,b) {
    return a+b;
}
const add2 = function(a,b){
    return a+b;
} 
const add3 = (a,b) => {
    return a+b;
} 
console.log(add1(1,1))

module.exports = {
    add1,
    add2
}