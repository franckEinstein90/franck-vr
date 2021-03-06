import * as THREE from 'three';    

export const plane = ( color, width:number, height:number ):THREE.Mesh =>{
       
    const planeGeometry = new THREE.PlaneBufferGeometry( width, height );
    const planeMaterial = new THREE.MeshStandardMaterial( {
        color,
        roughness: 1.0,
        metalness: 0.0
    } );
    const plane = new THREE.Mesh( planeGeometry, planeMaterial) ;
    return plane ;

} ; 
