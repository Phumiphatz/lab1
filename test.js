// const math = require('/math');
// const add = math.add1;
// console.log(math.add1(1,1))
// console.log(add1(1,1))

const assert = require('assert')
const math = require('./math')
describe('file to be tested' , ()=> {
    context('function to be tested' , () => {
        it('should do something' , () =>{
            assert.equal(1,1)
        })
        it('should do another thing' , () =>{
            assert.deepEqual([1,2,3],[1,2,3])
            assert,deepEqual({name: 'dome'} , {name: 'dome'})
        })
    })
})

describe('file math', () => {
    context('function add1', () => {
        it('should add(1,2', () => {
            assert.equal(math.add1(1,2),3)
        })
    })
    context('function add2', () => {
        it('should add2(5,5', () => {
            assert.equal(math.add1(5,5),10)
        })
    })
})