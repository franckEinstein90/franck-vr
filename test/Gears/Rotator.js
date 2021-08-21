
const { Rotator } = require('../../src/components/ThreeStack/Mechanics/Gears/Rotator') ; 
const { InvalidConstructionObject } = require('../../src/components/ThreeStack/errors') ;

const expect = require('chai').expect ; 

describe('Rotator', function() { 

  it("Is initialized with an option object", function() {
    expect(()=>new Rotator()).to.throw( InvalidConstructionObject ) ; 
    expect(()=>new Rotator(3)).to.throw( InvalidConstructionObject ) ; 
    expect(()=>new Rotator({})).to.not.be.undefined; 
  }) ; 
 
  it('Should have a radius property, initialized to 1 by default', function() {
    const r = new Rotator({}) ; 
    expect( r ).to.have.property('radius') ; 
    expect( r.radius ).to.eql( 1 ) ; 
  }) ; 

  it('has a property rotationAngle, initialized at 0 by default', function() {
    const r = new Rotator({}) ; 
    expect(r).to.have.property('rotationAngle') ; 
    expect(r.rotationAngle).to.eql( 0 ); 
  }) ; 

  it('By default, it should have center at {0,0}', function() {
    const r = new Rotator({}) ; 
    expect(r).to.have.property('center') ; 
    expect(r.center.x).to.eql(0) ; 
    expect(r.center.y).to.eql(0) ; 
  }) ; 

  it('The center position can be set through the constructor', function() {
    const r = new Rotator({center:{x:3, y:4}}) ; 
    expect(r.center).to.eql({x:3, y:4}) ; 
  }) ; 

  it("Contains a 'turn' method", function() {
    const r = new Rotator({}) ; 
    expect(r).to.have.property('turn') ; 
    expect(typeof r.turn).to.eql('function') ; 
  }) ; 

});

describe('Rotator.turn', function() { 

  it('changes the value of the rotationAngle property', function() {
    const r = new Rotator({}) ;
    expect(r.rotationAngle).to.eql(0) ; 
    r.turn(2) ; 
    expect(r.rotationAngle).to.eql(2) ; 
  }) ; 

  it("Can't set the rotationAngle property to greater than 2.Pi", function() {
    const r = new Rotator({}) ;
    expect(r.rotationAngle).to.eql(0) ; 
    r.turn(Math.PI*1.9) ; 
    r.turn(Math.PI*1.9) ; 
    expect(r.rotationAngle).to.be.lessThan(2*Math.PI) ; 
  }) ;  
  
  it("Can't set the rotationAngle property to less than -2.Pi", function() {
    const r = new Rotator({}) ;
    expect(r.rotationAngle).to.eql(0) ; 
    r.turn(-8) ; 
    expect(r.rotationAngle).to.be.greaterThan(-2*Math.PI) ; 
  }) ; 

  it("Adds or remove angles in the way you'd expect", function() {
    [
      {
        rotationSequence: [Math.PI/4,Math.PI/4], 
        result: Math.PI/2
      },
      {
        rotationSequence: [Math.PI/4,-Math.PI/4], 
        result: 0 
      },
      {
        rotationSequence: [2*Math.PI,Math.PI/4], 
        result: Math.PI/4 
      },
      {
        rotationSequence: [2*Math.PI,Math.PI/4,0, 3*Math.PI/4], 
        result:Math.PI 
      },
    ].forEach( test => {
        const r = new Rotator({}) ;
        test.rotationSequence.forEach( rotation => r.turn(rotation)) ; 
        expect(r.rotationAngle).to.be.eql( test.result ) ; 
    })
  }) ;  
  

})
  