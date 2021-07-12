import * as THREE from 'three';    
import { plane } from "./BasicShapes/plane" ;

export const setFloor = (scene : THREE.Scene )=>{
    const floor = plane( 0xaa3333, 6, 4 ); 
    //floor.rotation.x = - Math.PI / 2; 
    scene.add( floor );
}
