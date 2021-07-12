import { Gear, GearSystem } from "./definitions";
import * as THREE from 'three';

export const gearSystem = ( 
    scene: THREE.Scene, 
    gridHelper : THREE.GridHelper ) : GearSystem => {

    let _driverRotationPerCycle = 0.072; 
    let _driver : Gear ; 
    let _connectedGears : Gear[] = [] ; 
    gridHelper.rotateX(Math.PI/2);
    scene.add( gridHelper );

    return {
        next: ()=>{
            _driver.turn(_driverRotationPerCycle) ; 
            _connectedGears.forEach(g => g.turn(-1 * _driverRotationPerCycle)) ; 
        }, 
        pause : ()=> {

        }, 
        reset: ()=>{

        }, 
        driver : ( g? : Gear )=>{
            if( g ) _driver = g;
            return _driver; 
        },

        addGear : ( g : Gear )=>{
            //Add a gear connected to the driver
            _connectedGears.push(g);
        }, 

        translateX : ( x : number )=>{
            _driver.translateX(x); 
            gridHelper.translateX(x); 
        }
    }  ; 
} ;
