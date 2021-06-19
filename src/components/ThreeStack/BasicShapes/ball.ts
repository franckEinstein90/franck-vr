import * as THREE from 'three';
import * as ShapeTypes from './types';

export const ball = ( 
    specs: ShapeTypes.Round,
    texture ) : THREE.Mesh =>{

    texture.anisotropy = 16;
    let icosahedronGeometry = new THREE.IcosahedronGeometry(specs.radius, 5);
    let lambertMaterial = new THREE.MeshPhongMaterial({ map: texture });
    return new THREE.Mesh(icosahedronGeometry, lambertMaterial);

} ;

export const torus = (
    specs: ShapeTypes.Round,
    texture ) : THREE.Mesh =>{

    texture.anisotropy = 16;
    let torusGeometry = new THREE.TorusGeometry(specs.radius, 5, 16,100);
    let lambertMaterial = new THREE.MeshPhongMaterial({ map: texture });
    return new THREE.Mesh(torusGeometry, lambertMaterial);

    } ;