import { BuildItEditor } from "./types";
import * as THREE from 'three';

export const Viewport = function( editor : BuildItEditor ){

    const grid = new THREE.Group() ; 
    const gridOne = new THREE.GridHelper(30, 30, 0x888888) ; 
    grid.add( gridOne ) ;
    
    

} ; 