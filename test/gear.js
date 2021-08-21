const { Gear, Cogs, GearErrors } = require('../src/components/ThreeStack/Mechanics/Gears/tes') ; 
const ErrorSignals = require('../src/components/ThreeStack/errors.js') ; 
const expect = require('chai').expect ; 

describe('Cogs', function() { 

  it("has a size property" , function() {
    const cogs = new Cogs({size:4}); 
    expect(cogs.size).to.eql(4); 
  }) ; 

  it("The number of cogs has to be an even number" , function() {
    expect(()=>new Cogs({size: 13})).to.throw(GearErrors.InvalidTeethArity) 
  }) ; 

}) ; 

describe('Gear', function() { 

  it("Must be constructed through an option object" , function() {
    expect( () => new Gear()).to.throw(ErrorSignals.InvalidConstructionObject); 
  }) ; 

  it("has a 'cogs' property" , function() {
    const r = new Gear({}) ; 
    expect(r).to.have.property('cogs') ; 
  }) ; 

  it("The property 'cogs' can be set through the constructor option argument" , function() {
    const r = new Gear({cogs:{ }}) ; 
    expect(r).to.have.property('cogs') ; 
  }) ; 

  it('has a center position that can be set through the constructor', function() {
    const r = new Gear({center:{x:3, y:4}}) ; 
    expect(r.center).to.eql({x:3, y:4}) ; 
  })

});