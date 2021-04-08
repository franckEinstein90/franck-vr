
import * as THREE from 'three'; 

export const setCameras =( canvas : HTMLElement ) : THREE.PerspectiveCamera =>{

    const camera = new THREE.PerspectiveCamera( 
        50,//fov 
        canvas.clientWidth/ canvas.clientHeight , //aspect
        0.01, //near
        50 ); //far
    camera.position.set( 0, 1.6, 3 );
    return camera ; 
} ; 
