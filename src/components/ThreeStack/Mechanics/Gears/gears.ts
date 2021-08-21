import * as Shapes      from "../../BasicShapes/types" ; 
import * as Circulars   from "../../BasicShapes/ball" ;
import * as THREE from 'three';

const defaultTextureAnisotropy = 16; 

export const gear = ( gearSpecs, texture, scene ) =>{

    texture.anisotropy = defaultTextureAnisotropy ;

    const mesh  = Circulars.torus( {radius:gearSpecs.radius/3}, texture );

    const geometry = new THREE.BoxGeometry( gearSpecs.radius, 3, 3 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

    const g2 = new THREE.BoxGeometry( 3, gearSpecs.radius, 3 );
    const t1 = new THREE.Mesh( geometry, material );
    const t2 = new THREE.Mesh( g2, material );
    const components = [mesh, t1, t2] ; 
    components.forEach( m => {
        m.translateX(gearSpecs.center.x); 
        m.translateY(gearSpecs.center.y); 
        scene.add( m );
    }) ; 
  //  const nucleusSpecs = { radius : specs.radius /3 } ; 
//    const meshNucleus = Circulars.torus(nucleusSpecs, texture);0
 //   scene.add( meshNucleus ); 

    return {

        radius : gearSpecs.radius,

        getMesh : () => mesh,

        turn : (angle) => {
            components.forEach( m => {
                m.rotateZ(angle); 
            })
        }, 

        translateX : (distance) => {
            mesh.translateX(distance); 
        }, 
        translateY : (distance) => {
            mesh.translateY(distance); 
        }, 
        translateZ : (distance) => {
            mesh.translateZ(distance); 
        }, 

        rotateX : (angle)=>{
            mesh.rotation.z = angle
        }
    }
} ;






