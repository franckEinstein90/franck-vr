
import * as GearTypes   from "../../ThreeStack/Mechanics/Gears/definitions" ; 
import { gear }         from "../../ThreeStack/Mechanics/Gears/gears"; 
import { gearSystem, GearTrain }   from "../../ThreeStack/Mechanics/Gears/gearSystem"; 
import * as THREE from 'three' ;

export const setUpGearSystem = ( 
    scene : THREE.Scene, 
    gearTexture : THREE.Texture) : GearTypes.GearSystem => {

    const gridHelper = new THREE.GridHelper( 600, 100, 0x0000ff, 0x808080 );
    const system = new GearTrain( scene, gridHelper ) ;
  
    const driverGear = gear({radius : 25}, gearTexture, scene) ;
    driverGear.translateZ(10); 
    system.driver(driverGear)  ;
  
    const slaveGear1 = gear( {radius:35}, gearTexture, scene ) ; 
    system.addGear( slaveGear1 );
    slaveGear1.translateX( 70 ) ;
    slaveGear1.translateZ( 10 ) ; 

    const slaveGear2 = gear( {radius:35}, gearTexture, scene );
    system.addGear( slaveGear2 ); 
    slaveGear2.translateX(-70);
    slaveGear2.translateZ( 10 ) ; 
    return system ;
  } ;