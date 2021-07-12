
import * as GearTypes   from "../../ThreeStack/Mechanics/Gears/definitions" ; 
import { gear }         from "../../ThreeStack/Mechanics/Gears/gears"; 
import { gearSystem }   from "../../ThreeStack/Mechanics/Gears/gearSystem"; 
import * as THREE from 'three' ;

export const setUpGearSystem = ( 
    scene : THREE.Scene, 
    gearTexture : THREE.Texture) : GearTypes.GearSystem => {

    const gridHelper = new THREE.GridHelper( 600, 100, 0x0000ff, 0x808080 );
    const system = gearSystem( scene, gridHelper ) ;
  
    const driverGear = gear({radius : 25}, gearTexture, scene) ;
    driverGear.translateX(-70);
    system.driver(driverGear)  ;
  
    const g = gear( {radius:35}, gearTexture, scene ) ; 
    system.addGear(g);
    g.translateX( 80 ) ;
  
    const g2 = gear( {radius:35}, gearTexture, scene );
    system.addGear(g2); 
    return system ;
  } ;