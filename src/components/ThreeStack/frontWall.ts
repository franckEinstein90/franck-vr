import * as THREE from 'three';    
import { plane } from "./BasicShapes/plane" ;

export const setFrontWall = (scene : THREE.Scene )=>{
    //floor is blue
    //front wall is pink

    const floor = plane( 0x0011aa,2 ) ;
    floor.translateZ(-2) ; //to the front
    floor.translateY( 1 ) ; //up one
    scene.add( floor ) ;

} ; 
