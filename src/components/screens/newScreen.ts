import * as THREE from 'three'; 

export const newScreen = (scene : THREE.Scene ) => {
    const height=1.8; 
    const geometry = new THREE.BoxGeometry( 3.2, height,  0.1 );
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh( geometry, material );
    mesh.translateZ(-2) ;
    mesh.translateY(height/2) ; 
    scene.add( mesh );
} ; 

