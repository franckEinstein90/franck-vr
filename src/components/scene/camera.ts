
import * as THREE from 'three'; 

interface Position {
    x : number ; 
    y : number ; 
    z : number;
}

export const setCameras = ( 
    canvas : HTMLCanvasElement,
    far : number,  
    p : Position ) : THREE.PerspectiveCamera =>{

    const camera = new THREE.PerspectiveCamera( 
        55,//fov 
        canvas.clientWidth/ canvas.clientHeight , //aspect
        0.01, //near
        far) ; 
        //50 ); //far

        camera.position.set(p.x,p.y,p.z) ; 
//camera.position.set( 0, 1.6, 3 );
    return camera ; 
} ; 
