const chai = require('chai')
const expect = chai.expect
const math = require('./math')

describe('Test chai', ()=>{
    it('should compare thing by expect', () => {
        expect(1).to.equal(1)
    })
    it('should compare another thing by expect', () => {
        expect(5>8).to.be.false
        expect({name: 'dome'}).to.deep.equal({name: 'dome'})
        expect({name: 'dome'}).to.have.property('name').to.equal('dome')
        expect({}.to.be.a('object'))
        expect((1).to.be.a('number'))
        expect('dome').to.be.a('string')
        expect('dome'.length).to.equal(4)
        expect('dome').to.lengthOf(4)        
        expect([1,2,3]).to.lengthOf(3)
        expect(null).to.but.null
        expect(undefined).to.not.exist
        expect(1).to.exist
    })
})

describe('Math module',() =>{
    context('Function add1' , () =>{
        it('ควรส่งค่ากลับเป็นตัวเลข') , () =>{
            expect(math.add(0,0)).to.be.a('number')
        }
        it('add(1,1) ควรส่งค่ากลับเป็น 2' , () =>{
            expect(math.add(1,1)).to.equal(2)
        })
    })
})