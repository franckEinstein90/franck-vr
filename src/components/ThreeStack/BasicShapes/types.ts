
export interface Shape {
    translateX? (x : number)  : void; 
    translateY? (x : number)  : void ;
    translateZ? (x : number)  : void ;
    
    rotateX? (x: number) : void ; 
}

export interface Rotator extends Shape{
    radius : number;
    turn( angle : number ) : void ; 
}