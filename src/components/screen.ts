import * as THREE from 'three'; 

export const screen = (scene : THREE.Scene ) => {
    const geometry = new THREE.BoxGeometry( 3.2, 3.2, 0.1 );
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh( geometry, material );
    mesh.translateZ(-2) ; 
    scene.add( mesh );
} ; 

