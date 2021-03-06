const chai = require('chai');
const expect = chai.expect;
const math = require('./math');
describe('Test chai',()=>{
    it('Should compare thing',()=>{
        expect(1).to.equal(1);
    });
    it('Should compare anything',()=>{
        expect(5>8).to.be.false;
        expect({name: 'dom'}).to.have.property('name').to.equal('dom')
        expect({}).to.be.a('object');
        expect(1).to.be.a('number');
        expect('dom').to.be.a('string');
        expect('dom'.length).to.equal(3);
        expect('dom').to.lengthOf(3);
        expect([1,2,4]).to.lengthOf(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.exist; 
    });
});

describe('test math module',()=>{
    it('ควรส่งค่ากลับเป็นตัวเลข',()=>{
        expect(math.add1(1,1)).to.be.a('number');
    });
    it('ควรส่งค่ากลับเป็น 2',()=>{
        expect(math.add1(1,1)).to.equal(2)
    });
});