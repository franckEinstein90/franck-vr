
import * as THREE from 'three';
import * as ShapeTypes from './types';

export const line = ( from , to) : THREE.Line =>{

    const material = new THREE.LineBasicMaterial( { color: 0x00ff00, linewidth: 100 } );
    const lineGeometry = new THREE.Geometry();
    lineGeometry.vertices.push(from) ; 
    lineGeometry.vertices.push(to) ; 
    return new THREE.Line(lineGeometry, material)

}
