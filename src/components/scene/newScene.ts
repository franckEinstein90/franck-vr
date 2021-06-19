
import * as THREE from 'three';    

export const newScene = ( color : number ):THREE.Scene =>{
   const scene = new THREE.Scene();
  // scene.background = new THREE.Color( color );
  // scene.add( new THREE.HemisphereLight( 0x888877, 0x777788 ) );
   return scene ; 
}