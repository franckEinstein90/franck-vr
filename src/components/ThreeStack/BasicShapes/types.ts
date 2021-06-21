



export interface Shape {
    translateX? (x : number)  : void; 
    translateY? (x : number)  : void ;
    translateZ? (x : number)  : void ; 
}

export interface Round extends Shape{
    radius : number;
}