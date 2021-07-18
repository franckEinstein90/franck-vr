import * as Shapes from "../../BasicShapes/types" ; 
import {System} from "../../../Systems/definitions" 
 
export interface Gear extends Shapes.Round{

    velocity    : number ; 
    force       : number ;
    driver      : Gear   ;
    
    getMesh() : THREE.Mesh ;
    turn( angle : number) : void ;

}

export interface GearSystemState {
    runningTime : number ; 
    running     : boolean ; 
}

export interface GearSystem extends System<GearSystemState> {
    rotationalVelocity   : number ; 
    driver ( g : Gear )  : void ;
    addGear( g : Gear )  : void ; 
}

