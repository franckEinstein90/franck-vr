const { InvalidConstructionObject } = require('../../errors') ;

class Rotator {
    constructor( options ){
        if ( options === undefined ) throw InvalidConstructionObject ;
        if ( typeof options !== 'object') throw InvalidConstructionObject ;
        this.radius = options.radius || 1; 
        this.center = options.center || {x:0, y:0} ; 
        this.rotationAngle = 0; 
    }
} ; 

Rotator.prototype.turn = function( angle ){
    let newAngle = this.rotationAngle + angle ; 
    if(newAngle >= 0){
        while( newAngle >= Math.PI*2 ) newAngle -= Math.PI*2 ; 
    } else {
        while( newAngle <= Math.PI*2 ) newAngle += Math.PI*2 ; 
    }
    this.rotationAngle = newAngle ; 
    return ; 
} ; 

module.exports = {
    Rotator, 
}