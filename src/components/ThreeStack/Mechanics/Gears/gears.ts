import * as Shapes from "../../BasicShapes/types" ; 
import * as Circulars from "../../BasicShapes/ball" ;
import * as THREE from 'three';

export interface Gear extends Shapes.Round{
    getMesh() : THREE.Mesh ;
    turn( angle : number) : void
}

export const gear = ( specs: Shapes.Round, texture, scene ) : Gear =>{

    texture.anisotropy = 16;
    const mesh        = Circulars.torus(specs, texture);
    const nucleusSpecs = {
        radius : specs.radius /3
    }

    const meshNucleus = Circulars.torus(nucleusSpecs, texture);
    scene.add(mesh); 
    scene.add(meshNucleus); 

    return {

        radius : specs.radius,

        getMesh : () => mesh,

        turn : (angle) => {
            mesh.rotation.z += (angle); 
        }, 

        translateX : (distance) => {
            mesh.translateX(distance); 
            meshNucleus.translateX(distance); 
        }, 
        translateY : (distance) => {
            mesh.translateY(distance); 
            meshNucleus.translateY(distance); 
        }, 
        translateZ : (distance) => {
            mesh.translateZ(distance); 
            meshNucleus.translateZ(distance); 
        }, 

        rotateX : (angle)=>{
            mesh.rotation.z = angle
        }


    }
} ;


export const gearSystem = (
    scene: THREE.Scene 
    ) => {

    const _driverRotationPerCycle = 0.072; 

    let _driver : Gear ; 
    let _connectedGears : Gear[] = [] ; 

    const gridHelper = new THREE.GridHelper( 200, 20, 0x0000ff, 0x808080 );
    gridHelper.rotateX(Math.PI/2);
 //   gridHelper.translateX( 80 )
    scene.add( gridHelper );


    return {

        driver : ( g? : Gear )=>{
            if( g ) _driver = g;
            return _driver; 
        },

        addGear : ( g : Gear )=>{
            //Add a gear connected to the driver
            _connectedGears.push(g);

        }, 

        run : ()=>{
            _driver.turn(_driverRotationPerCycle) ; //.getMesh().rotation.z += _driverRotationPerCycle ; 
            _connectedGears.forEach(g => g.turn(-1 * _driverRotationPerCycle)) ; 
        }, 

        translateX : ( x : number )=>{
            _driver.translateX(x); 
            gridHelper.translateX(x); 
        }

    } 
}





