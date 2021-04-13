import * as THREE from 'three'; 

export const leftController = () => {

    const geometry = new THREE.CylinderBufferGeometry( 0.01, 0.02, 0.08, 5 );
    geometry.rotateX( - Math.PI / 2 );
    const material = new THREE.MeshStandardMaterial( { 
        color: 0xaa3333, 
        flatShading: true 
    });
    const mesh = new THREE.Mesh( geometry, material );

    const pivot = new THREE.Mesh( new THREE.IcosahedronBufferGeometry( 0.01, 3 ) );
    pivot.name = 'pivot';
    pivot.position.z = - 0.05;
    mesh.add(pivot); 
    return mesh
}